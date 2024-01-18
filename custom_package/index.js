const upperCase = require("upper-case").upperCase;

function greet(name){
    console.log(`Hello ${name}, welcome to Node.js!`);
}

greet(upperCase("Billy"));
module.exports = greet;