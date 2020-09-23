const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542
  });
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log(`${data}`)
  });
  conn.on("connect",() => {
    console.log("Successfully connected to game server!!!");
    conn.write("Name: WDP");
  });
  return conn;
}

module.exports = { connect }