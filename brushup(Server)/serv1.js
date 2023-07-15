const http = require('http');

// Creating a basic Server
http.createServer((req, res) => {
    res.write("Hello Suyog Chavan");
    res.end();
}).listen(4500);

