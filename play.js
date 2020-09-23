const { connect } = require('./client');
const { setUpInput } = require('./input');

console.log('Connecting ...');
// let connectVariable = connect();
setUpInput(connect());