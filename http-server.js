const express = require('express')
const app = express()
require('express-ws')(app)
const accounts = require('./accounts')

app.get('/accounts/account/:account', function (req, res) {
  accounts.getAccount(req.params.account)
  .then(r => res.send(r))
  .catch(logError)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
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
