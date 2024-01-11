require('./iife')

const math = require('./add')
const{add, multiply} = math
console.log(add(4, 2));
console.log(multiply(4, 2));

const guy = require('./app');
const you = new guy("Willy", 21);
console.log(you.getName());
console.log(you.getAge());

//importing json files
const data = require("./data.json");
console.log(data);
console.log("The main version is",data.version);

//importing a built-in module
const path = require("node:path");
console.log(__filename);
console.log(__dirname);

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.extname(__filename));
console.log(path.extname(__dirname));

console.log(path.parse(__filename));

console.log(path.format(path.parse(__filename)));

//Absolute path
console.log(path.isAbsolute(__filename));
