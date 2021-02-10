/**
 * Establishes connection with the game server
 */
const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  // connect to server message
  conn.on('connect', () => {
    console.log('Successfully connected to the game');
  });
// name message at connection
  conn.on('connect', () => {
  conn.write('Name: CMD ');
});
  // quit message
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}

module.exports = connect;