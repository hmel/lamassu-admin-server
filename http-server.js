'use strict'

const express = require('express')
const app = express()
const https = require('https')
const http = require('http')
require('express-ws')(app)
const bodyParser = require('body-parser')
const serveStatic = require('serve-static')
const cookieParser = require('cookie-parser')
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

app.get('/account/:account', (req, res) => {
  accounts.getAccount(req.params.account)
  .then(account => res.json(account))
})

app.post('/account', (req, res) => {
  console.log('DEBUG1: %j', req.body)

  accounts.updateAccount(req.body)
  .then(account => res.json(account))
})

app.get('/config/:config', (req, res) =>
  config.fetchConfigGroup(req.params.config).then(c => res.json(c)))

function pp (o) {
  console.log(require('util').inspect(o, {depth: null, colors: true}))
}

app.post('/config', (req, res) => {
  config.saveConfigGroup(req.body)
  .then(c => res.json(c))
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

const adminApp = express()

// login security:
// generate secure url from console with one-time pass
// on first get, validate, then delete one-time pass
// set long term token in secure cookie and db

adminApp.use(cookieParser())

adminApp.get('/register/:token', (req, res) => {
  const cookieOpts = {
    httpOnly: true,
    maxAge: 60 * 60 * 1000
  }
  const token = req.params.token
  res.cookie('token', token, cookieOpts)
  res.status(200).end()
})

adminApp.get('/cookie', (req, res) => {
  console.log(req.cookies)
  res.status(200).end()
})

adminApp.use(serveStatic('../lamassu-admin-elm/build'))
adminApp.listen(8083)

function logError (err) {
  // Note: this shouldn't happen
  console.log(err.stack)
  throw err
}
