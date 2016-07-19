const IO = require('socket.io-client')
const socket = new IO('ws://localhost:8092')

socket.on('connect', () => {
  socket.send({
    action: 'accounts',
    command: 'configuredAccounts'
  })

  socket.on('message', console.log)
})
