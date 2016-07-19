const Primus = require('primus');
const PrimusResponder = require('primus-responder');

const Socket = Primus.createSocket({
  transformer: 'websockets',
  plugin: { responder: PrimusResponder }
});
const socket = new Socket('ws://localhost:8092');

socket.on('open', () => {
  socket.writeAndWait({
    action: 'accounts',
    command: 'configuredAccounts'
  }, res => {
    console.log(JSON.stringify(res, null, 2));
  });
});