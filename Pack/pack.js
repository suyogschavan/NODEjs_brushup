var http = require('http');

http.createServer((req, res)=>{
    res.write("SoulServer is running");
    res.end();
}).listen(8080);