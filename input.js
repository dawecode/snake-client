/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  // handling CTRL + C USER INPUT 
  const handlerUserInput = function () {
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.stdout.write('Terminated');
        process.stdout.write('\n');
        process.exit();
      }
    });
  }
  handlerUserInput()
  return stdin;
}

module.exports = { setupInput };