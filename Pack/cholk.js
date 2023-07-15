var http = require('http');

http.createServer((req, res)=> {
    res.write("Soul Suyog")
    res.end();
}).listen(8080);