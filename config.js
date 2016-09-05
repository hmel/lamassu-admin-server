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

function dbFetchConfig () {
  return db.oneOrNone('select data from user_config where type=$1', ['config'])
  .then(row => row && row.data)
}

function fetchConfigGroup (code) {
  return Promise.all([fetchSchema(), fetchData(), dbFetchConfig()])
  .then(arr => {
    const schema = arr[0]
    const data = arr[1]
    const config = arr[2]
    const groupSchema = schema.filter(r => r.code === code)[0]
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

function fetchData () {
  return Promise.resolve({
    currencies: [{code: 'USD', display: 'US Dollar'}, {code: 'ILS', display: 'New Israeli Sheqel'}],
    cryptos: [{crypto: 'BTC', display: 'Bitcoin'}, {crypto: 'ETH', display: 'Ethereum'}],
    languages: [{code: 'en-US', display: 'English [US]'}, {code: 'he', display: 'Hebrew'}],
    accounts: [{code: 'bitpay', display: 'Bitpay', class: 'ticker'}],
    machines: [{machine: '123-34-234', display: 'Blue toad'}]
  })
}

function dbSaveConfig (config) {
  return db.none('update user_config set data=$1 where type=$2', [config, 'config'])
}

function saveConfigGroup (results) {
  console.log('DEBUG1')
  pp(results)

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

    console.log('DEBUG3')
    pp(configGroup.values)

    return dbSaveConfig(config)
    .then(() => fetchConfigGroup(groupCode))
  })
  .catch(e => console.log(e.stack))
}

// fetchConfigGroup('commissions').then(pp).then(() => process.exit()).catch(err => console.log(err.stack))

module.exports = {
  fetchConfigGroup: fetchConfigGroup,
  saveConfigGroup: saveConfigGroup
}
