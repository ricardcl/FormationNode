const http = require('http');
const mongoose = require('mongoose');

const config = require('./config');
const app  = require('./app');

const server = http.createServer(app);

mongoose.connect('mongodb://localhost:27017/test');

server.on('error', (err) => {
  console.log(err.message);
});

server.listen(config.port, () => {
  console.log('Server started on port ' + config.port);
});
