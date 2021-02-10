

const connect = require('./client');
console.log('Connecting ...');
connect();

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
const handlerUserInput = function(){
  stdin.on('data', (key) => {
    process.stdout.write('Terminated');
    if (key === '\u0003') {
      process.exit();
    }
  });
}
  handlerUserInput()
  return stdin;
}

setupInput();