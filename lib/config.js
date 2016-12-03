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
const configManager = require('./config-manager')

function fetchSchema () {
  const schemaPath = path.resolve(options.lamassuServerPath, 'lamassu-schema.json')

  return fs.readFile(schemaPath)
  .then(JSON.parse)
}

function dbFetchConfig () {
  return db.oneOrNone('select data from user_config where type=$1', ['config'])
  .then(row => row && row.data)
}

function allScopes (cryptoScopes, machineScopes) {
  const scopes = []
  cryptoScopes.forEach(c => {
    machineScopes.forEach(m => scopes.push([c, m]))
  })

  return scopes
}

function allCryptoScopes (cryptos, cryptoScope) {
  const cryptoScopes = []

  if (cryptoScope === 'global' || cryptoScope === 'both') cryptoScopes.push('global')
  if (cryptoScope === 'specific' || cryptoScope === 'both') cryptos.forEach(r => cryptoScopes.push(r))

  return cryptoScopes
}

function allMachineScopes (machines, machineScope) {
  const machineScopes = []

  if (machineScope === 'global' || machineScope === 'both') machineScopes.push('global')
  if (machineScope === 'specific' || machineScope === 'both') machines.forEach(r => machineScopes.push(r))

  return machineScopes
}

function satisfiesRequire (config, cryptos, machines, field, refFields) {
  const fieldCode = field.code

  const scopes = allScopes(
    allCryptoScopes(cryptos, field.cryptoScope),
    allMachineScopes(machines, field.machineScope)
  )

  if (fieldCode === 'cryptoCurrencies') {
    console.log(field)
    console.log(allCryptoScopes(cryptos, field.cryptoScope))
    console.log(allMachineScopes(machines, field.machineScope))
    console.log(scopes)
  }

  return scopes.every(scope => {
    const isEnabled = () => refFields.some(refField => {
      return isScopeEnabled(config, cryptos, machines, refField, scope)
    })

    const isBlank = () => R.isNil(configManager.scopedValue(scope[0], scope[1], fieldCode, config))
    const isRequired = refFields.length === 0 || isEnabled()

    return isRequired ? !isBlank() : true
  })
}

function isScopeEnabled (config, cryptos, machines, refField, scope) {
  const [cryptoScope, machineScope] = scope
  const candidateCryptoScopes = cryptoScope === 'global'
  ? allCryptoScopes(cryptos, refField.cryptoScope)
  : [cryptoScope]

  const candidateMachineScopes = machineScope === 'global'
  ? allMachineScopes(machines, refField.machineScope)
  : machineScope

  const allRefCandidateScopes = allScopes(candidateCryptoScopes, candidateMachineScopes)
  const getFallbackValue = scope => configManager.scopedValue(scope[0], scope[1], refField.code, config)
  const values = allRefCandidateScopes.map(getFallbackValue)

  return values.some(r => r)
}

function fetchMachines () {
  const sql = 'SELECT device_id, name FROM devices'
  return db.any(sql)
  .then(rows => rows.map(row => row.device_id))
}

function getCryptos (config, machines) {
  const scopes = allScopes(['global'], allMachineScopes(machines, 'both'))
  const scoped = scope => configManager.scopedValue(scope[0], scope[1], 'cryptoCurrencies', config)
  return scopes.reduce((acc, scope) => R.union(acc, scoped(scope)), [])
}

function getGroup (schema, fieldCode) {
  return schema.groups.find(group => group.fields.find(R.equals(fieldCode)))
}

function getField (schema, group, fieldCode) {
  if (!group) group = getGroup(schema, fieldCode)
  const field = schema.fields.find(r => r.code === fieldCode)
  return R.merge(R.pick(['cryptoScope', 'machineScope'], group), field)
}

function validateConfig () {
  return Promise.all([fetchSchema(), dbFetchConfig(), fetchMachines()])
  .then(([schema, configRec, machines]) => {
    const config = configRec ? configRec.config : []
    const cryptos = getCryptos(config, machines)
    return schema.groups.filter(group => {
      return group.fields.some(fieldCode => {
        const field = getField(schema, group, fieldCode)
        if (!field.fieldValidation.find(r => r.code === 'required')) return false

        const refFields = (field.enabledIf || []).map(R.curry(getField)(schema, null))
        return !satisfiesRequire(config, cryptos, machines, field, refFields)
      })
    })
  })
  .then(arr => arr.map(r => r.code))
}

function fetchConfigGroup (code) {
  const fieldLocatorCodeEq = R.pathEq(['fieldLocator', 'code'])
  return Promise.all([fetchSchema(), fetchData(), dbFetchConfig()])
  .then(([schema, data, config]) => {
    const configValues = config ? config.config : []
    const groupSchema = schema.groups.find(r => r.code === code)

    if (!groupSchema) throw new Error('No such group schema: ' + code)

    const schemaFields = groupSchema.fields
    .map(R.curry(getField)(schema, groupSchema))

    const candidateFields = [
      schemaFields.map(R.prop('requiredIf')),
      schemaFields.map(R.prop('enabledIf')),
      groupSchema.fields
    ]
    const configFields = R.uniq(R.flatten(candidateFields)).filter(R.identity)

    const values = configFields
    .reduce((acc, configField) => acc.concat(configValues.filter(fieldLocatorCodeEq(configField))), [])

    groupSchema.fields = undefined
    groupSchema.entries = schemaFields

    const pp = o => console.log(require('util').inspect(o, {depth: null, colors: true}))
    console.log('DEBUG00')
    pp(values)

    return {
      schema: groupSchema,
      values: values,
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
  return dbFetchConfig()
  .then(config => {
    return config
    ? Promise.resolve(config)
    : db.none('insert into user_config (type, data) values ($1, $2)', ['config', {config: []}])
      .then(dbFetchConfig)
  })
  .then(config => {
    const oldValues = config.config

    results.values.forEach(newValue => {
      const oldValueIndex = oldValues
      .findIndex(old => old.fieldLocator.code === newValue.fieldLocator.code &&
        old.fieldLocator.fieldScope.crypto === newValue.fieldLocator.fieldScope.crypto &&
        old.fieldLocator.fieldScope.machine === newValue.fieldLocator.fieldScope.machine
      )

      const existingValue = oldValueIndex > -1 &&
        oldValues[oldValueIndex]

      if (existingValue) {
        // Delete value record
        if (R.isNil(newValue.fieldValue)) {
          oldValues.splice(oldValueIndex, 1)
          return
        }

        existingValue.fieldValue = newValue.fieldValue
        return
      }

      if (!R.isNil(newValue.fieldValue)) oldValues.push(newValue)
    })

    return dbSaveConfig(config)
    .then(() => fetchConfigGroup(results.groupCode))
  })
  .catch(e => console.log(e.stack))
}

// fetchConfigGroup('commissions').then(pp).then(() => process.exit()).catch(err => console.log(err.stack))

module.exports = {
  fetchConfigGroup,
  saveConfigGroup,
  validateConfig
}
