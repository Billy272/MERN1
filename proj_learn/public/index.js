const http = require('node:http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"}); //Always specify the content type
    res.end("Welcome to node.js")
});

server.listen(3000, () => {
    console.log("Server is working on port 3000");
});