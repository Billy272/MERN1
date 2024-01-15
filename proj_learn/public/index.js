const http = require('node:http');

const server = http.createServer((req, res) => {

    const me = {
        name: "Billy",
        age: 21,
        location: "Nairobi"
    };

    res.writeHead(200, {"Content-Type": "text/html"}); //Always specify the content type
    res.end("<h1>Coding is fun.</h1>");
});

server.listen(3000, () => {
    console.log("Server is working on port 3000");
});

//This is my first API with JS. I am so excited.