
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  return stdin;
};

let movement={w:"Move: up",a:"Move: left",s:"Move: down",d:"Move: right"}

const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
  if (movement[key]){
    connection.write(movement[key]);
  }
  if (key ==="c") {
    connection.write("Say: WOW")
  }


};

setupInput().on("data", handleUserInput);





const move = {
  w: "Move: up",
  s: "Move: down",
  a: "Move: left",
  d: "Move: right",
};

module.exports={setupInput}


// setupInput(conn).on("data",(key)=>{
//   console.log(connection);

// })


// stn().on("data",(key)=>{
//   console.log(key)
//   connection.on("data",move[key]);
// });



