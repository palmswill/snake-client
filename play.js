const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");








setupInput(connect());

module.exports = { connect, setupInput };
