var http = require('http');
var data = require('./data');

http.createServer((req, res)=>{
    res.writeHead(200, {'content-type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000);