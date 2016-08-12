const express = require('express')
const app = express()
require('express-ws')(app)
const accounts = require('./accounts')

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/totem', (req, res) => {
  return res.send('<the totem>')
})

app.get('/initial', (req, res) => {
  // TODO: pull from plugins
  const config = {
    global: {
      global: {
        plugins: [{
          code: 'twilio',
          display: 'Twilio',
          fields: [{
            code: 'accountSid',
            display: 'Account SID',
            type: 'string',
            secret: false,
            required: true
          }]
        }]
      }
    }
  }

  return res.json({config: config})
})

app.get('/accounts/account/:account', function (req, res) {
  accounts.getAccount(req.params.account)
    .then(r => res.send(r))
    .catch(logError)
})

app.listen(8093, function () {
  console.log('lamassu-admin-server listening on port 8093')
})

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
