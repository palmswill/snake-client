const net = require("net");
const {IP,PORT} = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

// conn.on("connect", () => {
//   conn.write("Name:MAX");
// });

// conn.on("connect",()=>{
//   setInterval(()=>{conn.write(move.up)},1000)
// })

// let stn=setupInput();

module.exports={connect}
