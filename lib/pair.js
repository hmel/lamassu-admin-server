const path = require('path')
const fs = require('fs')
const pify = require('pify')
const readFile = pify(fs.readFile)
const crypto = require('crypto')
const db = require('./db')

const CA_PATH = path.resolve(__dirname, '..', '..', 'lamassu-server', 'ca-cert.pem')

function unpair (deviceId) {
  const sql = 'update devices set paired=FALSE where device_id=$1'

  return db.none(sql, [deviceId])
}

function totem (hostname, name) {
  return readFile(CA_PATH)
  .then(data => {
    const caHash = crypto.createHash('sha256').update(data).digest()
    const token = crypto.randomBytes(32)
    const hexToken = token.toString('hex')
    const caHexToken = crypto.createHash('sha256').update(hexToken).digest('hex')
    const buf = Buffer.concat([caHash, token, Buffer.from(hostname)])
    const sql = 'insert into pairing_tokens (token, name) values ($1, $3), ($2, $3)'

    return db.none(sql, [hexToken, caHexToken, name])
    .then(() => buf.toString('base64'))
  })
}

module.exports = {totem, unpair}
