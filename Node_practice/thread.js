const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end("Welcome to the home page");
    } else if (req.url === "/slow-page"){
        let j = 0;
        for (let i=0; i< 50000000; i++){
            j++;
        }
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end(`Welcome to the slow page ${j}`);
    }
})