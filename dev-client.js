const got = require('got')

got('http://localhost:3000/accounts/account/bitgo')
.then(r => console.log(r.body))
.catch(console.log)

/*
const IO = require('socket.io-client')
const socket = new IO('ws://localhost:8092')

socket.on('connect', () => {
  socket.send({
    action: 'accounts',
    command: 'configuredAccounts'
  })

  socket.on('message', console.log)
})
*/
