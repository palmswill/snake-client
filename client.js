const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "172.25.170.49",
    port: 50541,
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
