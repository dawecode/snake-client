let connection;

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  // handling CTRL + C USER INPUT
  const handlerUserInput = function() {
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.stdout.write('Terminated');
        process.stdout.write('\n');
        process.exit();
      }
      if (key === 'w') {
        conn.write('Move: up');
      }
      if (key === 'a') {
        conn.write('Move: left');
      }
      if (key === 's') {
        conn.write('Move: down');
      }
      if (key === 'd') {
        conn.write('Move: right');
      }
      if (key === 'h') {
        conn.write('Say: You got it dude !');
      }
      if (key === 'l') {
        conn.write('Say: LooOOoooser !');
      }
    });
  };
  handlerUserInput();
  return stdin;
};

module.exports = { setupInput };