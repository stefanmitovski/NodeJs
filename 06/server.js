const http = require('http');

const server = http.createServer((req,res) =>{
    console.log('test server');
    console.log(req.url);
    if(req.url=='/wiki/Main_Page'){
        res.end('Ova e wiki')
    }else
        res.end('Zdravo')
    }

);

console.log('Server is started');
server.listen(8080);