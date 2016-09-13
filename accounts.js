const R = require('ramda')
const db = require('./db')
const pify = require('pify')
const fs = pify(require('fs'))
const path = require('path')

function fetchAccountData () {
  return db.oneOrNone('select data from user_config where type=$1', ['accounts'])
}

const accountRoot = path.resolve(__dirname, '..', 'lamassu-server', 'node_modules')

function fetchAccountSchema (account) {
  const accountPath = path.resolve(accountRoot, 'lamassu-' + account, 'schema.json')

  return fs.readFile(accountPath)
  .then(JSON.parse)
}

function mergeWithSchema (schema, accountRow) {
  if (!accountRow) return schema

  console.log(accountRow)
  const accountData = accountRow.data.filter(R.propEq('code', schema.code))
  if (!accountData) return schema

  const dataFields = accountData.fields

  const updateWithData = schemaField => {
    const valueField = R.find(r => r.code === schemaField.code, dataFields)
    const value = valueField ? valueField.value : null
    return R.assoc('value', value, schemaField)
  }

  const updatedFields = schema.fields.map(updateWithData)

  return R.assoc('fields', updatedFields, schema)
}

function getAccount (account) {
  return fetchAccountSchema(account)
  .then(schema => {
    if (!schema) throw new Error('No such schema')

    return fetchAccountData()
    .then(r => mergeWithSchema(schema, r))
  })
}

function pp (o) {
  console.log(require('util').inspect(o, {depth: null, colors: true}))
}

getAccount('twilio')
.then(pp)
.then(() => process.exit(0))
.catch(e => { console.log(e.stack); process.exit(1) })

module.exports = {
  getAccount: getAccount
//  updateAccount: updateAccount
}
