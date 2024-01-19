const cluster = require('node:cluster');
const http = require('node:http');

if(cluster.isMaster){
    console.log(`Master ${process.pid} is running.`);
    for(let i=0; i<2; i++){
        cluster.fork();
    }
} else {
    console.log(`Worker ${process.pid} started.`);
    const server = http.createServer((req, res) => {
        if (req.url === '/') {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Welcome to the homepage!');
        } else if (req.url === '/slow-page') {
            for(let i=0; i< 40000000; i++) {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('Welcome to the slow page!');
            }
        }
    })
    server.listen(8000, () => {
        console.log('Server is on port 8000');
    })
}

