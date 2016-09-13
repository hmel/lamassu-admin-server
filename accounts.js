const R = require('ramda')
const db = require('./db')
const pify = require('pify')
const fs = pify(require('fs'))
const path = require('path')

function fetchAccountData () {
  return db.oneOrNone('select data from user_config where type=$1', ['accounts'])
  .then(row => {
    return row
    ? Promise.resolve(row)
    : db.none('insert into user_config (type, data) values ($1, $2)', ['accounts', {}])
      .then(fetchAccountData)
  })
}

const accountRoot = path.resolve(__dirname, '..', 'lamassu-server', 'node_modules')

function fetchAccountSchema (account) {
  const accountPath = path.resolve(accountRoot, 'lamassu-' + account, 'schema.json')

  return fs.readFile(accountPath)
  .then(JSON.parse)
}

function mergeAccount (schema, newAccount) {
  const dataFields = newAccount.fields

  const updateWithData = schemaField => {
    const valueField = R.find(r => r.code === schemaField.code, dataFields)
    const value = valueField ? valueField.value : null
    return R.assoc('value', value, schemaField)
  }

  const updatedFields = schema.fields.map(updateWithData)

  return R.assoc('fields', updatedFields, schema)
}

function getAccountRec (account) {
  return fetchAccountSchema(account)
  .then(schema => {
    if (!schema) throw new Error('No such schema')

    return fetchAccountData()
    .then(r => {
      if (!r || R.isEmpty(r.data)) return schema

      return mergeAccounts(schema, r.data.fields)
    })
  })
}

function getAccount (account) {
  return getAccountRec(account)
  .then(dataFields => R.find(r => r.code === account, dataFields))
}

function save (accountRec) {
  return db.none('update user_config set data=$1 where type=$2', [accountRec, 'accounts'])
}

function updateAccount (accountData) {
  return getAccount(accountData.code)
  .then(r => mergeAccount(r, accountData.fields))
  .then(save)
  .then(() => getAccount(accountData.code))
}

// function pp (o) {
//   console.log(require('util').inspect(o, {depth: null, colors: true}))
// }
//
// getAccount('twilio')
// .then(pp)
// .then(() => process.exit(0))
// .catch(e => { console.log(e.stack); process.exit(1) })

module.exports = {
  getAccount: getAccount,
  updateAccount: updateAccount
}
