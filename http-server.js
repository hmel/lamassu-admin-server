'use strict'

const express = require('express')
const app = express()
const https = require('https')
const http = require('http')
require('express-ws')(app)
var bodyParser = require('body-parser')
const accounts = require('./accounts')
const config = require('./config')
const fs = require('fs')

app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/totem', (req, res) => {
  return res.send('<the totem>')
})

let account = {
  code: 'twilio',
  display: 'Twilio',
  fieldSet: {
    fields: [
      {
        code: 'accountSid',
        display: 'Account SID',
        secret: false,
        required: true,
        value: {
          fieldType: 'string',
          value: '123xx'
        },
        status: {
          code: 'error',
          error: 'No such account'
        }
      },
      {
        code: 'accountPass',
        display: 'Account Password',
        secret: true,
        required: true,
        value: {
          fieldType: 'password'
        },
        status: {
          code: 'idle'
        }
      }
    ]
  }
}

app.get('/account/:account', (req, res) => {
  return res.json(account)
})

app.post('/account', (req, res) => {
  console.log('DEBUG1: %j', req.body)
  res.json(account)
})

app.get('/config/:config', function (req, res) {
  return config.fetchConfigGroup(req.params.config).then(c => res.json(c))
})

app.get('/accounts/account/:account', function (req, res) {
  accounts.getAccount(req.params.account)
    .then(r => res.send(r))
    .catch(logError)
})

app.get('/test', (req, res) => {
  console.log('DEBUG2')
  console.dir(req)
  res.json('success')
})

const options = {
  key: fs.readFileSync('./lamassu.key'),
  cert: fs.readFileSync('./lamassu.crt')
}

http.createServer(app).listen(8093)
https.createServer(options, app).listen(8094)

app.ws('/echo', function (ws, req) {
  ws.on('message', function (msg) {
    ws.send(msg)
  })
})

function logError (err) {
  // Note: this shouldn't happen
  console.log(err.stack)
  throw err
}
