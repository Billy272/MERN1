require('./iife')
require('./add')
const guy = require('./app');
const you = new guy("Willy", 21);
console.log(you.getName());
console.log(you.getAge());
