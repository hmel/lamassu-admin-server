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
const login = require('./login')
const fs = require('fs')

app.use(cookieParser())
app.use(register)
app.use(authenticate)
app.use(bodyParser.json())

app.get('/api/totem', (req, res) => {
  return res.send('<the totem>')
})

app.get('/api/account/:account', (req, res) => {
  accounts.getAccount(req.params.account)
  .then(account => res.json(account))
})

app.post('/api/account', (req, res) => {
  console.log('DEBUG1: %j', req.body)

  accounts.updateAccount(req.body)
  .then(account => res.json(account))
})

app.get('/api/config/:config', (req, res) =>
  config.fetchConfigGroup(req.params.config).then(c => res.json(c)))

function pp (o) {
  console.log(require('util').inspect(o, {depth: null, colors: true}))
}

app.post('/api/config', (req, res) => {
  config.saveConfigGroup(req.body)
  .then(c => res.json(c))
})

app.get('/api/accounts/account/:account', function (req, res) {
  accounts.getAccount(req.params.account)
    .then(r => res.send(r))
    .catch(logError)
})

const options = {
  key: fs.readFileSync('./lamassu.key'),
  cert: fs.readFileSync('./lamassu.crt')
}

app.use(serveStatic('../lamassu-admin-elm/build'))

function register (req, res, next) {
  const otp = req.query.otp

  if (!otp) return next()

  return login.register(otp)
  .then(r => {
    if (r.expired) return res.status(401).send('OTP expired, generate new registration link')
    if (!r.success) return res.status(401).send('Registration failed')

    const cookieOpts = {
      httpOnly: true,
      secure: true
    }

    const token = r.token
    req.token = token
    res.cookie('token', token, cookieOpts)
    next()
  })
}

function authenticate (req, res, next) {
  const token = req.token || req.cookies.token

  console.log(req.cookies)

  return login.authenticate(token)
  .then(success => {
    if (!success) return res.status(401).send('Authentication failed')
    next()
  })
}

function logError (err) {
  // Note: this shouldn't happen
  console.log(err.stack)
  throw err
}

http.createServer(app).listen(8093)
https.createServer(options, app).listen(8094)
