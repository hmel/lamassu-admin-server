'use strict'

const pify = require('pify')
const fs = pify(require('fs'))
const path = require('path')
const R = require('ramda')
const db = require('./db')

function fetchSchema () {
  const schemaPath = path.resolve(__dirname, '..', 'lamassu-server', 'lamassu-schema.json')

  return fs.readFile(schemaPath)
  .then(JSON.parse)
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
  const dbPromise = db.one('select data from user_config where type=$1', ['config'])
  return Promise.all([fetchSchema(), fetchData(), dbPromise])
  .then(arr => {
    const schema = arr[0]
    const data = arr[1]
    const config = arr[2]
    const groupSchema = schema.filter(r => r.code === code)[0]
    const groupConfig = config.filter(r => r.code === code)[0] || []

    if (!groupSchema) throw new Error('No such group schema: ' + code)

    return {
      schema: groupSchema,
      values: groupConfig,
      data: data
    }
  })
}

function fetchData () {
  return Promise.resolve({
    currencies: [{code: 'USD', display: 'US Dollar'}],
    languages: [{code: 'en-US', display: 'English [US]'}, {code: 'he', display: 'Hebrew'}],
    accounts: [{code: 'bitpay', display: 'Bitpay', class: 'ticker'}],
    machines: []
  })
}

function updateGroup (oldGroup, newGroup) {
  newGroup.cryptoConfigs.forEach(cryptoConfig => {
    cryptoConfig.machineConfigs.forEach(machineConfig => {
      machineConfig.fieldSet.fields.forEach(field => {
        const updatedCryptoConfig = oldGroup.cryptoConfigs.filter(r => r.cryptoCode === cryptoConfig.cryptoCode)[0] || {
          cryptoCode: cryptoCode.cryptoCode,
          machineConfigs = []
        }

        const updatedMachineConfig = updatedCryptoConfig.machineConfigs.filter(r => r.machine === machineConfig.machine) || {
          machine: machineConfig.machine,
          fieldSet: { fields: []}
        }

        const updatedField = updatedMachineConfig.fieldSet.fields.filter(r => r.code === field.code) ||
      }
    })
  })
}

function saveConfigGroup (group) {
  const groupCode = group.code
  fetchConfigGroup(groupCode)
  .then(oldGroup => {
    updatedGroup = updateGroup(oldGroup, group)
    return saveGroup(updatedGroup)
  })
  .then(() => fetchConfigGroup(groupCode))
}
// fetchConfigGroup('commissions').then(pp).then(() => process.exit()).catch(err => console.log(err.stack))

module.exports = {
  fetchConfigGroup: fetchConfigGroup,
  saveConfigGroup: saveConfigGroup
}
