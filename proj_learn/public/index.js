require('./iife')

const math = require('./add')
const{add, multiply} = math
console.log(add(4, 2));
console.log(multiply(4, 2));

const guy = require('./app');
const you = new guy("Willy", 21);
console.log(you.getName());
console.log(you.getAge());
