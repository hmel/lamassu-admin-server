const path = require('path')
const fs = require('fs')
const pify = require('pify')
const readFile = pify(fs.readFile)
const crypto = require('crypto')
const db = require('./db')

const CA_PATH = path.resolve(__dirname, '..', '..', 'lamassu-server', 'ca-cert.pem')

function unpair (deviceId) {
  const sql = 'delete from paired_devices where device_id=$1'

  return db.none(sql, [deviceId])
}

function totem (ipAddress) {
  return readFile(CA_PATH)
  .then(data => {
    const caHash = crypto.createHash('sha256').update(data).digest()
    const token = crypto.randomBytes(32)
    const ip = Buffer.from(ipAddress.split('.').map(s => parseInt(s, 10)))
    const buf = Buffer.concat([ip, caHash, token])
    const sql = 'insert into pairing_tokens (token) values ($1)'

    return db.none(sql, [token.toString('hex')])
    .then(() => buf.toString('base64'))
  })
}

module.exports = {totem, unpair}
