const fs = require("node:fs/promises");

async function readFile(){
    try{
        const data = await fs.readFile("./file.txt", "utf-8");
        console.log(data);
    } catch(error){
        console.log(error);
    }
}

readFile();

fs.readFile("./file.txt", "utf-8")
.then((data) => console.log(data))
.catch((error) => console.log(error));

console.log("This proves that JS is asynchronous");

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

//writing functions to read and write files
fs.writeFileSync("./code.txt", "Did I just format a file unknowingly. It's kinda funny.");
fs.writeFile("./code.txt", "Did I just format a file unknowingly. It's kinda funny.", (error) => {
    if(error){
        console.log(error);
    } else {
        console.log("File written successfully");
    }
})

const fs = require("node:fs");
const zlib = require("node:zlib");

const readStream = fs.createReadStream("./file.txt", {encoding: "utf-8"});

//using pipe to read and write files
readStream.pipe(zlib.gzip).pipe(fs.WriteStream("./file2.txt.gz"));

const writeStream = fs.createWriteStream("./file2.txt");

readStream.pipe(writeStream);

readStream.on("data", (chunk) => {
    console.log(chunk);
    writeStream.write(chunk);
}) 


