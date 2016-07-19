
const fs = require('fs');
const path = require('path');
const R = require('ramda');
const pify = require('pify');
const db = require('pg-promise')()(process.env['DATABASE_URL']);

const fsReadFile = pify(fs.readFile);
const fsReaddir = pify(fs.readdir);
const fsAccess = pify(fs.access);

const PLUGIN_PATH = __dirname + '/../../../lamassu-server/node_modules';

function getSchema(account) {
  const accountPath = path.resolve(PLUGIN_PATH, 'lamassu-' + account);
  const schemaPath = path.resolve(accountPath, 'lamassu-schema.json');

  return fsReadFile(schemaPath).then(JSON.parse).catch(e => {
    if (e.code === 'ENOENT') {
      return fsAccess(accountPath).then(() => {
        throw new Error('Account has no schema file');
      }).catch(() => {
        throw new Error('Account Not Found');
      });
    }
    throw new Error('Account schema is invalid');
  });
}

function fetchUserConfig() {
  return db.one('select data from user_config where type=$1', ['exchanges']).then(row => row.data);
}

function getAccountData(account) {
  return fetchUserConfig().then(config => config.exchanges.plugins.settings[account]);
}

function elideSecrets(accountRec) {
  const data = accountRec.accountData;
  const uiSchema = accountRec.schema.uiSchema;
  const isPassword = key => uiSchema[key] && uiSchema[key]['ui:widget'] === 'password';
  const mapper = (value, key) => isPassword(key) ? undefined : value;

  return R.assoc('accountData', R.mapObjIndexed(mapper, data), accountRec);
}

function getAccount(account) {
  return getSchema(account).then(schema => {
    return getAccountData(account).then(accountData => ({ schema: schema, accountData: accountData })).then(elideSecrets);
  });
}

function getAccountList() {
  return fsReaddir(PLUGIN_PATH).then(dirs => {
    const schemaPromises = dirs.map(accountName => {
      if (accountName.search(/^lamassu-/) === -1) return undefined;
      const code = accountName.replace(/^lamassu-/, '');
      return getSchema(code).then(schema => ({ code: code, name: schema.jsonSchema.title })).catch(() => undefined);
    });

    return Promise.all(schemaPromises).then(R.reject(R.isNil));
  });
}

function updateAccount(account, accountData) {
  return fetchUserConfig().then(config => {
    const oldAccountData = config.exchanges.plugins.settings[account];
    const newAccountData = R.merge(oldAccountData, accountData);
    const settingsPath = ['exchanges', 'plugins', 'settings', account];
    const newConfig = R.assocPath(settingsPath, newAccountData, config);
    return db.none('update user_config set data=$1 where type=$2', [newConfig, 'exchanges']).then(() => getAccount(account)).then(accountRec => accountRec.accountData);
  });
}

function getConfiguredAccounts() {
  return fetchUserConfig().then(config => R.keys(config.exchanges.plugins.settings)).then(configuredAccounts => {
    return getAccountList().then(R.filter(r => R.contains(r.code, configuredAccounts)));
  });
}

function handle(req) {
  switch (req.command) {
    case 'account':
      return getAccount(req.account);
    case 'listAccounts':
      return getAccountList();
    case 'updateAccount':
      return updateAccount(req.account, req.accountData);
    case 'configuredAccounts':
      return getConfiguredAccounts();
    default:
      throw new Error('No such command');
  }
}

module.exports = { handle: handle };