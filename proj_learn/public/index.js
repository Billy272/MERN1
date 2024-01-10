require('./iife')
const math = require('./add')
console.log(math.add(4, 2));
console.log(math.multiply(4, 2));
const guy = require('./app');
const you = new guy("Willy", 21);
console.log(you.getName());
console.log(you.getAge());
