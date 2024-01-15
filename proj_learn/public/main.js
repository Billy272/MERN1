//dealing with fs module
const fs = require("node:fs");

console.log("First statement");
const fileContent = fs.readFileSync("./file.txt", "utf-8");

console.log(fileContent);

console.log("2nd statement");
fs.readFile("./file.txt","utf-8", (error, data) => {
    if(error){
        console.log(error);
    } else {
        console.log(data);
    }
})

console.log("This proves that JS is asynchronous");

//This whole process above proves that an applicaton cannot lag 
//when many users are using it at the same time.
//The process asynchronusly handles the requests of the users.