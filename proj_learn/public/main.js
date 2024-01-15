//dealing with fs module
const fs = require("node:fs");

const fileContent = fs.readFileSync("./file.txt", "utf-8");

console.log(fileContent);