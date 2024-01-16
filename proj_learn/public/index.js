const http = require('node:http');
const fs = require('node:fs');

// const server = http.createServer((req, res) => {
//     const name = "Billy";
//     res.writeHead(200, {"Content-Type": "text/html" }); //Always specify the content type
//     // fs.createReadStream(__dirname + "./index.html").pipe(res);
//     let html = fs.readFileSync("./index.html", "utf-8");
//     html = html.replace("{{name}}", name);
//     res.end(html);
// });

const server = http.createServer((req, res) => {
    res.end(req.url);

    if (req.url === "/") {
        res.writeHead(200, {"Content-Type": "text/plain" });
        res.end("Welcome to the home page");
    } else if (req.url === "/about") {
        res.writeHead(200, {"Content-Type": "text/plain" });
        res.end("This is the about page");
    } else if (req.url === "/contact"){
        res.writeHead(200, {"Content-Type" : "text/plain" });
        res.end("This is the contact page");
    } else if (req.url === "/api") {
        res.writeHead(200, {"Content-Type": "application/json" });
        const data = {
            name: "Billy",
            age: 21,
            job: "Programmer"
        };
        res.end(JSON.stringify(data));
    } else {
        res.writeHead(404, {"Content-Type": "text/plain" });
        res.end("Page not found.");
    }
});

server.listen(3000, () => {
    console.log("Server is working on port 3000");
});

//This is my first API with JS. I am so excited.