const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end("Welcome to the home page");
    } else if (req.url === "/slow-page"){
        for (let i=0; i< 50000000; i++){
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("Welcome to the slow page");
        }
    }
})

server.listen(8000, () => {
    console.log("Server is on port 8000");
})