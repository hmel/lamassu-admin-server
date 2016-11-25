const R = require('ramda')
const fs = require('fs')
const db = require('./db')
const path = require('path')
const options = require('./options')

const accountRoot = options.pluginPath
const schemas = {}

function fetchSchemas () {
  const files = fs.readdirSync(accountRoot)

  files.forEach(file => {
    if (file.indexOf('lamassu-') !== 0) return

    try {
      const schema = JSON.parse(fs.readFileSync(path.resolve(accountRoot, file, 'schema.json')))
      schemas[schema.code] = schema
    } catch (_) {
    }
  })
}

function fetchAccounts () {
  return db.oneOrNone('select data from user_config where type=$1', ['accounts'])
  .then(row => {
    return row
    ? Promise.resolve(row.data.accounts)
    : db.none('insert into user_config (type, data) values ($1, $2)', ['accounts', {accounts: []}])
      .then(fetchAccounts)
  })
}

function groupAccount (group) {
  return group.values.filter(r => r.fieldLocator.fieldType === 'account').map(r => r.fieldValue.value)
}

function selectedAccounts () {
  const notNil = x => !R.isNil(x)
  return db.oneOrNone('select data from user_config where type=$1', ['config'])
  .then(row => row && row.data)
  .then(data => {
    if (!data) return

    const selected = R.uniq(R.flatten(data.groups.map(groupAccount)))
    return selected.map(account => {
      const schema = schemas[account]
      if (!schema || !schema.display) return null
      return {code: account, display: schema.display}
    }).filter(notNil)
  })
}

function fetchAccountSchema (account) {
  return schemas[account]
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
  const schema = fetchAccountSchema(accountCode)
  if (!schema) return Promise.reject(new Error('No schema for: ' + accountCode))

  return fetchAccounts()
  .then(accounts => {
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
  : R.append(newAccount, accounts)
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

fetchSchemas()

module.exports = {
  selectedAccounts,
  getAccount,
  updateAccount
}
