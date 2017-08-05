const http = require('http');
const hostname = '127.0.0.1';
const fs = requr(fS)
const port = 3000;
const server = http.createServer((req,res)=>{
   res.statusCode = 200;
   res.setHeader('content-type','text/plain');
   res.end('Hellow world');
});

server.listen(port,hostname,()=>{
  console.log("Server started at "+port);
});
