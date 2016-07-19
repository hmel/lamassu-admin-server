
const server = require('http').createServer();
const io = require('socket.io')(server);

const Handler = require('./handler');

const certPath = process.argv[2];

function logError(err) {
  // Note: this shouldn't happen
  console.log(err.stack);
  throw err;
}

io.on('connection', socket => {
  const handler = new Handler(certPath);
  handler.on('send', obj => socket.emit('update', obj));
  socket.on('request', (msg, done) => handler.handleRequest(msg).then(done).catch(logError));
  socket.on('data', (msg, done) => handler.handleData(msg).then(done).catch(logError));
});

io.on('error', console.log);

server.listen(8092);
console.log('Listening on port 8092.');