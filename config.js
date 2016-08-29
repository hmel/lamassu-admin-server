'use strict'

const R = require('ramda')
const pify = require('pify')
const fs = pify(require('fs'))
const path = require('path')
const db = require('./db')

function fetchSchema () {
  const schemaPath = path.resolve(__dirname, '..', 'lamassu-server', 'lamassu-schema.json')

  return fs.readFile(schemaPath)
  .then(JSON.parse)
}

function buildMachine (group, coins, config) {
  const entries = []

  if (group.crypto === 'both' || group.crypto === 'global') {
    const global = config.global
    const globalEntries = group.entries.map(entry =>
      R.assoc('value', global[entry.code], entry))
    entries.push({
      crypto: 'global',
      entries: globalEntries
    })
  }

  if (group.crypto === 'both' || group.crypto === 'specific') {
    const cryptoEntries = coins.map(coin => {
      const coinConfig = config[coin]

      const groupEntries = group.entries.map(entry =>
        R.assoc('value', coinConfig ? coinConfig[entry.code] : null, entry))

      return {
        crypto: coin,
        entries: groupEntries
      }
    })

    Array.prototype.push.apply(entries, cryptoEntries)
  }

  return entries
}

function buildSpecificMachine (group, coins, machineRows) {
  return machineRows.map(row => {
    const machineConfig = row.data
    const entries = buildMachine(group, coins, machineConfig)
    return {
      machine: row.device_id,
      entries: entries
    }
  })
}

function pp (o) {
  console.log(require('util').inspect(o, {depth: null, colors: true}))
}

function buildGroup (group, coins, globalConfig, machineRows) {
  let globalEntries, machineEntries

  if (group.machines === 'both' || group.machines === 'global') {
    globalEntries = buildMachine(group, coins, globalConfig)
  }

  if (group.machines === 'both' || group.machines === 'specific') {
    machineEntries = buildSpecificMachine(group, coins, machineRows)
  }

  const coinsPlusGlobal = ['global'].concat(coins)

  return coinsPlusGlobal.map(coin => {
    const entries = []

    if (globalEntries) {
      const coinEntries = globalEntries.filter(r => r.crypto === coin)
      entries.push({
        machine: 'global',
        entries: coinEntries
      })
    }

    if (machineEntries) {
      machineEntries.forEach(machine => {
        const coinEntries = machine.entries.filter(r => r.crypto === coin)
        entries.push({
          machine: machine.machine,
          entries: coinEntries
        })
      })
    }

    return {
      crypto: coin,
      machines: entries
    }
  })
}

function fetchConfig () {
  return fetchSchema()
  .then(schema => {
    console.log('DEBUG3')
    return db.one('select data from user_config where type=$1', ['global'])
    .then(row => {
      console.log('DEBUG4')
      const globalConfig = row.data
      const coins = ['BTC']
      console.log('DEBUG2')

      return db.any('select device_id, data from machine_configs')
      .then(machineRows => {
        const config = buildGroup(schema[0], coins, globalConfig, machineRows)
        pp(config)
      })

      /*
      const cryptos = R.keys(globalConfig)
      const config = {}

      cryptos.forEach(c => {
        config[c] = {global: globalConfig[c]}
      })

      return db.any('select device_id, data from machine_configs')
      .then(rows => {
        rows.forEach(machineRow => {
          const cryptos = R.keys(machineRow)
          const deviceId = machineRow.device_id
          cryptos.forEach(c => {
            config[c][deviceId] = machineRow.data[c]
          })

          return config
        })
      })
      */
    })
  })
  .catch(e => console.log(e.stack))
}

fetchConfig()
.then(() => process.exit())

module.exports = { fetchConfig: fetchConfig }
