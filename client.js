const { IP, PORT } = require('./constants');
const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  // connect to server message
  conn.on('connect', () => {
    console.log('Successfully connected to the game');
  });
  // name message at connection on server
  conn.on('connect', () => {
    conn.write('Name: CMD ');
  });
  // quit message
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

module.exports = { connect };