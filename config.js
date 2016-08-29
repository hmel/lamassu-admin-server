'use strict'

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

  if (group.cryptoScope === 'both' || group.cryptoScope === 'global') {
    const global = config.global
    pp(group.entries)
    const globalEntries = group.entries.map(entry => ({
      code: entry.code,
      display: entry.display,
      value: {
        fieldType: entry.fieldType,
        value: global[entry.code] || null
      },
      status: {code: 'idle'}
    }))

    entries.push({
      crypto: 'global',
      entries: globalEntries
    })
  }

  if (group.cryptoScope === 'both' || group.cryptoScope === 'specific') {
    const cryptoEntries = coins.map(coin => {
      const coinConfig = config[coin]

      const groupEntries = group.entries.map(entry => ({
        code: entry.code,
        display: entry.display,
        value: {
          fieldType: entry.fieldType,
          value: coinConfig && coinConfig[entry.code] ? coinConfig[entry.code] : null
        },
        status: {code: 'idle'}
      }))

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

  if (group.machineScope === 'both' || group.machineScope === 'global') {
    globalEntries = buildMachine(group, coins, globalConfig)
  }

  if (group.machineScope === 'both' || group.machineScope === 'specific') {
    machineEntries = buildSpecificMachine(group, coins, machineRows)
  }

  const coinsPlusGlobal = []

  if (group.cryptoScope === 'both' || group.cryptoScope === 'global') {
    coinsPlusGlobal.push('global')
  }

  if (group.cryptoScope === 'both' || group.cryptoScope === 'specific') {
    Array.prototype.push.apply(coinsPlusGlobal, coins)
  }

  return coinsPlusGlobal.map(coin => {
    const entries = []

    if (globalEntries) {
      const cryptoEntries = globalEntries.filter(r => r.crypto === coin)[0]
      if (cryptoEntries) {
        const coinFields = cryptoEntries.entries
        console.log('DEBUG5')
        entries.push({
          machine: 'global',
          fieldSet: {
            fields: coinFields
          }
        })
      }
    }

    if (machineEntries) {
      machineEntries.forEach(machine => {
        const cryptoEntries = machine.entries.filter(r => r.crypto === coin)[0]
        if (cryptoEntries) {
          const coinFields = cryptoEntries.entries
          entries.push({
            machine: machine.machine,
            fieldSet: {
              fields: coinFields
            }
          })
        }
      })
    }

    return {
      crypto: coin,
      machineConfigs: entries
    }
  })
}

function fetchConfigGroup (code) {
  return Promise.all([fetchSchema(), fetchData()])
  .then(arr => {
    const schema = arr[0]
    const data = arr[1]

    console.log('DEBUG3')
    return db.one('select data from user_config where type=$1', ['global'])
    .then(row => {
      console.log('DEBUG4')
      const globalConfig = row.data
      const coins = ['BTC']
      console.log('DEBUG2')

      return db.any('select device_id, data from machine_configs')
      .then(machineRows => {
        const group = schema.filter(r => r.group.code === code)[0]
        if (!group) return null

        const cryptos = buildGroup(group, coins, globalConfig, machineRows)
        return {
          group: group.group,
          cryptoScope: group.cryptoScope,
          machineScope: group.machineScope,
          cryptoConfigs: cryptos,
          data: data
        }
      })
    })
  })
}

function fetchData () {
  return Promise.resolve({
    currencies: [{code: 'USD', display: 'US Dollar'}],
    languages: [{code: 'en-US', display: 'English [US]'}, {code: 'he', display: 'Hebrew'}],
    accounts: [{code: 'bitpay', display: 'Bitpay', class: 'ticker'}]
  })
}

// fetchConfigGroup('commissions').then(pp).then(() => process.exit()).catch(err => console.log(err.stack))

module.exports = { fetchConfigGroup: fetchConfigGroup }
