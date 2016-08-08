const R = require('ramda')
const db = require('./db')

function fetchUserConfig () {
  return db.one('select data from user_config where type=$1', ['exchanges']).then(row => row.data)
}

function getAccount (account) {
  return fetchUserConfig().then(config => config.exchanges.plugins.settings[account])
}

/*
function elideSecrets (accountRec) {
  const data = accountRec.accountData
  const uiSchema = accountRec.schema.uiSchema
  const isPassword = key => uiSchema[key] && uiSchema[key]['ui:widget'] === 'password'
  const mapper = (value, key) => isPassword(key) ? undefined : value

  return R.assoc('accountData', R.mapObjIndexed(mapper, data), accountRec)
}
*/

function updateAccount (account, accountData) {
  return fetchUserConfig().then(config => {
    const oldAccountData = config.exchanges.plugins.settings[account]
    const newAccountData = R.merge(oldAccountData, accountData)
    const settingsPath = ['exchanges', 'plugins', 'settings', account]
    const newConfig = R.assocPath(settingsPath, newAccountData, config)
    return db.none('update user_config set data=$1 where type=$2', [newConfig, 'exchanges'])
    .then(() => getAccount(account))
  })
}

module.exports = {
  getAccount: getAccount,
  updateAccount: updateAccount
}
