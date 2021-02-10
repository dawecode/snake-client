/**
 * Establishes connection with the game server
 */
const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
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
  //move up
  //conn.on('connect', () => {
    //conn.write('Move: up')
  //});
  //conn.on('connect', () => {
   // conn.write('Move: down')
 // });

  // quit message
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

module.exports = connect;