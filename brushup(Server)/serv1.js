const http = require('http');

// Creating a basic Server
http.createServer((req, res) => {
    res.write("Hello from Suyog ");
    res.end();
}).listen(4500);

