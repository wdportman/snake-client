const handleUserInput = function (data) {
  if (data === '\x03') {
    process.exit();
  }
};

const setUpInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data',handleUserInput);
  return stdin;
};

module.exports = { setUpInput }