const R = require('ramda')
const db = require('./db')
const pify = require('pify')
const fs = pify(require('fs'))
const path = require('path')

function fetchAccounts () {
  return db.oneOrNone('select data from user_config where type=$1', ['accounts'])
  .then(row => {
    return row
    ? Promise.resolve(row.data.accounts)
    : db.none('insert into user_config (type, data) values ($1, $2)', ['accounts', {accounts: []}])
      .then(fetchAccounts)
  })
}

const accountRoot = path.resolve(__dirname, '..', 'lamassu-server', 'node_modules')

function fetchAccountSchema (account) {
  const accountPath = path.resolve(accountRoot, 'lamassu-' + account, 'schema.json')

  return fs.readFile(accountPath)
  .then(JSON.parse)
}

function mergeAccount (oldAccount, newAccount) {
  if (!newAccount) return oldAccount

  const newFields = newAccount.fields

  const updateWithData = oldField => {
    const newField = R.find(r => r.code === oldField.code, newFields)
    const newValue = newField ? newField.value : null
    return R.assoc('value', newValue, oldField)
  }

  const updatedFields = oldAccount.fields.map(updateWithData)

  return R.assoc('fields', updatedFields, oldAccount)
}

function getAccounts (accountCode) {
  return Promise.all([fetchAccountSchema(accountCode), fetchAccounts()])
  .then(arr => {
    const schema = arr[0]
    const accounts = arr[1]
    if (R.isEmpty(accounts)) return [schema]
    const account = R.find(r => r.code === accountCode, accounts)
    const mergedAccount = mergeAccount(schema, account)

    return updateAccounts(mergedAccount, accounts)
  })
}

function getAccount (accountCode) {
  return getAccounts(accountCode)
  .then(accounts => R.find(r => r.code === accountCode, accounts))
}

function save (accounts) {
  return db.none('update user_config set data=$1 where type=$2', [{accounts: accounts}, 'accounts'])
}

function updateAccounts (newAccount, accounts) {
  const accountCode = newAccount.code
  const isPresent = R.any(R.propEq('code', accountCode), accounts)
  const updateAccount = r => r.code === accountCode
  ? newAccount
  : r

  return isPresent
  ? R.map(updateAccount, accounts)
  : R.append(accounts, [newAccount])
}

function updateAccount (account) {
  return getAccounts(account.code)
  .then(accounts => {
    const merged = mergeAccount(R.find(R.propEq('code', account.code), accounts), account)
    return save(updateAccounts(merged, accounts))
  })
  .then(() => getAccount(account.code))
}

// const newAccount = { code: 'twilio',
//   display: 'Twilio',
//   fields:
//    [ { code: 'accountSid', value: 'xxx' },
//      { code: 'authToken', value: '' },
//      { code: 'fromNumber', value: '' },
//      { code: 'toNumber', value: '' } ] }
//
// function pp (o) {
//   console.log(require('util').inspect(o, {depth: null, colors: true}))
// }
//
// updateAccount(newAccount)
// .then(pp)
// .then(() => process.exit(0))
// .catch(e => { console.log(e.stack); process.exit(1) })

module.exports = {
  getAccount: getAccount,
  updateAccount: updateAccount
}
