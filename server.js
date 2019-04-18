const http = require('http');
const fs = require("fs");
const path = require("path");

//create a server object:
http.createServer((req, res) => {
    const scriptSources = [
        "'self'",
        "https://unpkg.com",
        "'nonce-super-secure-nonce'"
    ];
    const scriptSrcString = scriptSources.join(" ");

    res.writeHead(200, {
        "Content-Type": 'text/html',
        "content-security-policy": `script-src ${scriptSrcString}`
    });
    const html = fs.readFileSync(
        path.resolve(__dirname, "./index.html")
    );
    res.write(html);
    res.end();
}).listen(9000); //the server object listens on port 8080

console.log("Go to http://localhost:9000");