// @flow

const R = require('ramda')
const pify = require('pify')
const fs = pify(require('fs'))
const path = require('path')
const db = require('pg-promise')()(process.env['DATABASE_URL'])

import type {TransportRequest} from '../../types/global'

function fetchGlobalConfig () {
  return db.one('select data from user_config where type=$1', ['exchanges'])
  .then(row => row.data)
}

function fetchMachineConfigs () {
  const sql = 'select fingerprint, name, data ' +
  'from devices left join machine_configs ' +
  'on devices.fingerprint=machine_configs.device_fingerprint ' +
  'where devices.authorized=$1'

  return fetchGlobalSettings()
  .then(globalSettings => {
    return db.manyOrNone(sql, true)
    .then(rows => rows.map(R.merge(globalSettings)))
  })
}

function fetchGlobalSchema () {
  const schemaPath = path.resolve(__dirname, '../../../lamassu-server', 'lamassu-schema.json')
  return fs.readFile(schemaPath, 'utf8').then(JSON.parse)
}

function fetchGlobalSettings () {
  return Promise.all([fetchGlobalConfig(), fetchGlobalSchema()])
  .then(rs => ({config: rs[0].exchanges.settings, schema: rs[1]}))
}

function fetchCryptoConfig () {
  return db.oneOrNone('select data from user_config where type=$1', ['crypto'])
  .then(row => row ? row.data : {})
}

function fetchCryptoSchema () {
  const schemaPath = path.resolve(__dirname, '../../../lamassu-server', 'crypto-schema.json')
  return fs.readFile(schemaPath, 'utf8').then(JSON.parse)
}

function fetchCryptoSettings () {
  return Promise.all([fetchGlobalConfig(), fetchCryptoConfig(), fetchCryptoSchema()])
  .then(rs => ({
    coins: rs[0].exchanges.settings.coins,
    config: rs[1],
    schema: rs[2]
  }))
}

function fetchMachineConfig (machineId) {
  const sql = 'select data from machine_configs where device_fingerprint=$1'
  return db.one(sql, machineId)
  .then(row => row.data)
}

function updateMachineConfig (machineId, settings) {
  return fetchMachineConfig(machineId)
  .then(oldSettings => {
    if (!oldSettings) {
      const sql = 'insert into machine_configs (device_fingerprint, data) values ($1, $2)'
      return db.none(sql, [settings, machineId])
    }
    const newSettings = R.merge(oldSettings, settings)
    return db.none('update machine_configs set data=$1 where device_fingerprint=$2', [newSettings, 'machineId'])
  })
  .then(() => fetchMachineConfig(machineId))
}

function updateGlobalConfig (settings) {
  return fetchGlobalConfig()
  .then(config => {
    const oldSettings = config.exchanges.settings
    const newSettings = R.merge(oldSettings, settings)
    const settingsPath = ['exchanges', 'settings']
    const newConfig = R.assocPath(settingsPath, newSettings, config)
    console.log('DEBUG2')
    console.log(settings)
    console.log(newSettings)
    console.log(newConfig)
    return db.none('update user_config set data=$1 where type=$2', [newConfig, 'exchanges'])
    .then(() => fetchGlobalSettings())
  })
}

function handle (req: TransportRequest) {
  switch (req.command) {
    case 'globalConfig':
      return fetchGlobalSettings()
    case 'cryptoConfig':
      return fetchCryptoSettings()
    case 'machineConfigs':
      return fetchMachineConfigs()
    case 'updateGlobalConfig':
      return updateGlobalConfig(req.configData)
    case 'updateMachineConfig':
      return updateMachineConfig(req.machineId, req.config)
  }
}

module.exports = {handle: handle}
