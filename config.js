const R = require('ramda')
const pify = require('pify')
const fs = pify(require('fs'))
const path = require('path')
const db = require('./db')

function fetchConfig () {
  return db.one('select data from user_config where type=$1', ['global'])
  .then(row => {
    const globalConfig = row.data
    const cryptos = R.keys(globalConfig)
    const config = {}

    cryptos.forEach(c => {
      config[c] = {global: globalConfig[c]}
    })

    return db.any('select device_id, data from machine_configs')
    .then(rows => {
      rows.forEach(machineRow => {
        const cryptos = R.keys(machineRow)
        const deviceId = machineRow.device_id
        cryptos.forEach(c => {
          config[c][deviceId] = machineRow.data[c]
        })

        return config
      })
    })
  })
}

module.exports = { fetchConfig: fetchConfig }
