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

function pp (o) {
  console.log(require('util').inspect(o, {depth: null, colors: true}))
}

function fetchConfigGroup (code) {
  const dbPromise = db.oneOrNone('select data from user_config where type=$1', ['config'])
  return Promise.all([fetchSchema(), fetchData(), dbPromise])
  .then(arr => {
    const schema = arr[0]
    const data = arr[1]
    const config = arr[2]
    const groupSchema = schema.filter(r => r.code === code)[0]
    const groupConfig = config
    ? config.filter(r => r.code === code)[0] || []
    : []

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
    cryptos: [{code: 'BTC', display: 'Bitcoin'}, {code: 'ETH', display: 'Ethereum'}],
    languages: [{code: 'en-US', display: 'English [US]'}, {code: 'he', display: 'Hebrew'}],
    accounts: [{code: 'bitpay', display: 'Bitpay', class: 'ticker'}],
    machines: []
  })
}

function saveConfigGroup (group) {
  pp(group)

  return fetchConfigGroup(group)
}

// fetchConfigGroup('commissions').then(pp).then(() => process.exit()).catch(err => console.log(err.stack))

module.exports = {
  fetchConfigGroup: fetchConfigGroup,
  saveConfigGroup: saveConfigGroup
}
