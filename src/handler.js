// @flow

const crypto = require('crypto')
const EventEmitter = require('events').EventEmitter
const ip = require('ip')
const x509 = require('x509')
const db = require('pg-promise')()(process.env['DATABASE_URL'])
const accounts = require('./accounts')
const config = require('./config')

import type {TransportRequest} from '../../types/global'

const Handler = class Handler extends EventEmitter {
  ipAddress: string;
  fingerprint: string;
  constructor (certPath: string) {
    super()
    this.ipAddress = ip.address('public')
    this.fingerprint = x509.parseCert(certPath).fingerPrint
  }

  pair () {
    var token = crypto.randomBytes(32).toString('hex')

    return db.none('insert into pairing_tokens (token) values ($1)', [token])
    .then(() => ({
      token: token,
      fingerprint: this.fingerprint,
      ip: this.ipAddress,
      port: 3000
    }))
  }

  handleRequest (msg: TransportRequest) {
    var action = msg.action

    switch (action) {
      case 'pair':
        return this.pair()
      case 'accounts':
        return accounts.handle(msg)
      case 'config':
        return config.handle(msg)
      default:
        return Promise.reject(new Error('No such action: ' + action))
    }
  }

  handleData () {
    return Promise.resolve()
  }

  _fetchUserConfig () {
    return db.one('select data from user_config where type=$1', ['exchanges'])
    .then(row => row.data)
  }
}

module.exports = Handler
