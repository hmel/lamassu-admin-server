'use strict'

const pify = require('pify')
const fs = pify(require('fs'))
const path = require('path')
const R = require('ramda')
const db = require('./db')
const machines = require('./machines')
const currencies = require('../currencies.json')
const languageRec = require('../languages.json')
const options = require('./options')

function fetchSchema () {
  const schemaPath = path.resolve(options.lamassuServerPath, 'lamassu-schema.json')

  return fs.readFile(schemaPath)
  .then(JSON.parse)
}

function dbFetchConfig () {
  return db.oneOrNone('select data from user_config where type=$1', ['config'])
  .then(row => row && row.data)
}

// function allCryptos (config) {
//   const currencyGroup = config.groups.find(r => r.code === 'currencies')
//   const cryptos = currencyGroup.filter(r => r.values.fieldLocator.code === 'cryptoCurrencies')
//   return R.uniq(R.flatten(cryptos))
// }

// Dependencies:
// what does the user want to do?
// - sms required if notifications or zero conf
// - email required if notifications
// - notifications off by default
// - two-way off by default
// - should cash-out be settable globablly?
// - if something can be set globally, it should be required to be set in global

function validateConfig () { return [] }
// function validateConfig () {
//   return Promise.all([fetchSchema(), dbFetchConfig()])
//   .then(([schema, config]) => {
//     // For now just check required
//     // const cryptos = allCryptos(config) // TODO: enforce for all configured cryptos
//     return schema.filter(schemaGroup => {
//       const configGroup = config.groups.find(r => r.code === schemaGroup.code)

//       return schemaGroup.entries.some(entry => {
//         const required = entry.fieldValidation.find(r => r.code === 'required')
//         if (!required) return false

//         const configEntries = configGroup.values.filter(r => r.fieldLocator.code === entry.code)
//         const validEntry = configEntries.some(configEntry => {
//           const fieldScope = configEntry.fieldLocator.fieldScope
//           const skipScope = (fieldScope.crypto !== 'global' && schemaGroup.cryptoScope !== 'specific') ||
//             (schemaGroup.cryptoScope === 'specific' && fieldScope.crypto !== 'BTC') ||
//             (fieldScope.machine !== 'global' && schemaGroup.machineScope !== 'specific')
//           if (skipScope) return false
//           return true
//         })

//         return !validEntry
//       })
//     })
//   })
//   .then(arr => arr.map(r => r.code))
// }

function fetchConfigGroup (code) {
  return Promise.all([fetchSchema(), fetchData(), dbFetchConfig()])
  .then(arr => {
    const schema = arr[0]
    const data = arr[1]
    const config = arr[2]
    const groupSchema = schema.find(r => r.code === code)
    const group = config && config.groups.filter(r => r.code === code)[0]
    const groupValues = group ? group.values : []

    if (!groupSchema) throw new Error('No such group schema: ' + code)

    return {
      schema: groupSchema,
      values: groupValues,
      data: data
    }
  })
}

function massageCurrencies (currencies) {
  const convert = r => ({
    code: r['Alphabetic Code'],
    display: r['Currency']
  })
  const top5Codes = ['USD', 'EUR', 'GBP', 'CAD', 'AUD']
  const mapped = R.map(convert, currencies)
  const codeToRec = code => R.find(R.propEq('code', code), mapped)
  const top5 = R.map(codeToRec, top5Codes)
  const raw = R.uniqBy(R.prop('code'), R.concat(top5, mapped))
  return raw.filter(r => r.code[0] !== 'X' && r.display.indexOf('(') === -1)
}

const mapLanguage = lang => {
  const arr = lang.split('-')
  const code = arr[0]
  const country = arr[1]
  const langNameArr = languageRec.lang[code]
  if (!langNameArr) return null
  const langName = langNameArr[0]
  if (!country) return {code: lang, display: langName}
  return {code: lang, display: `${langName} [${country}]`}
}

const supportedLanguages = languageRec.supported
const languages = supportedLanguages.map(mapLanguage).filter(r => r)

function fetchData () {
  return machines.getMachines()
  .then(machineList => ({
    currencies: massageCurrencies(currencies),
    cryptoCurrencies: [{crypto: 'BTC', display: 'Bitcoin'}, {crypto: 'ETH', display: 'Ethereum'}],
    languages: languages,
    accounts: [
      {code: 'bitpay', display: 'Bitpay', class: 'ticker', cryptos: ['BTC']},
      {code: 'kraken', display: 'Kraken', class: 'ticker', cryptos: ['BTC', 'ETH']},
      {code: 'bitstamp', display: 'Bitstamp', class: 'ticker', cryptos: ['BTC']},
      {code: 'coinbase', display: 'Coinbase', class: 'ticker', cryptos: ['BTC', 'ETH']},
      {code: 'bitcoind', display: 'bitcoind', class: 'wallet', cryptos: ['BTC']},
      {code: 'bitgo', display: 'BitGo', class: 'wallet', cryptos: ['BTC']},
      {code: 'geth', display: 'geth', class: 'wallet', cryptos: ['ETH']},
      {code: 'mock-wallet', display: 'Mock wallet', class: 'wallet', cryptos: ['BTC', 'ETH']},
      {code: 'mock-sms', display: 'Mock SMS', class: 'sms'},
      {code: 'mock-id-verify', display: 'Mock ID verifier', class: 'idVerifier'},
      {code: 'twilio', display: 'Twilio', class: 'sms'},
      {code: 'mailjet', display: 'Mailjet', class: 'email'}
    ],
    machines: machineList.map(machine => ({machine: machine.deviceId, display: machine.name}))
  }))
}

function dbSaveConfig (config) {
  return db.none('update user_config set data=$1 where type=$2', [config, 'config'])
}

function saveConfigGroup (results) {
  const groupCode = results.groupCode

  return dbFetchConfig()
  .then(config => {
    return config
    ? Promise.resolve(config)
    : db.none('insert into user_config (type, data) values ($1, $2)', ['config', {groups: []}])
      .then(dbFetchConfig)
  })
  .then(config => {
    const existingConfigGroup = config.groups.filter(r => r.code === groupCode)[0]
    const configGroup = existingConfigGroup || {
      code: groupCode,
      values: []
    }

    if (!existingConfigGroup) config.groups.push(configGroup)

    results.values.forEach(value => {
      const existingValueIndex = configGroup.values
      .findIndex(r => r.fieldLocator.code === value.fieldLocator.code &&
        r.fieldLocator.fieldScope.crypto === value.fieldLocator.fieldScope.crypto &&
        r.fieldLocator.fieldScope.machine === value.fieldLocator.fieldScope.machine
      )

      const existingValue = existingValueIndex > -1 &&
        configGroup.values[existingValueIndex]

      if (existingValue) {
        // Delete value record
        if (R.isNil(value.fieldValue)) {
          configGroup.values.splice(existingValueIndex, 1)
          return
        }

        existingValue.fieldValue = value.fieldValue
        return
      }

      if (!R.isNil(value.fieldValue)) configGroup.values.push(value)
    })

    return dbSaveConfig(config)
    .then(() => fetchConfigGroup(groupCode))
  })
  .catch(e => console.log(e.stack))
}

// fetchConfigGroup('commissions').then(pp).then(() => process.exit()).catch(err => console.log(err.stack))

module.exports = {
  fetchConfigGroup,
  saveConfigGroup,
  validateConfig
}
