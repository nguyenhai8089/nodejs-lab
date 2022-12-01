const fs = require('fs');
const http = require('http');

const server =http.createServer((req, res)=>{
   /*  console.log(req.url,req.method, req.headers); */
    const url =req.url;
    const method = req.method;
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    if(url ==='/message' && method === 'POST'){
        const body = []
        req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end',()=>{
            const parserBody = Buffer.concat(body).toString();
            console.log(parserBody)
            const message = parserBody.split('=')[1];
            fs.writeFileSync('message.txt',message)
        })
        
        res.statusCode =302
        res.setHeader('Location','/')
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>hello from my Node.js Server!</h1></body>')
    res.write('</html>');
    res.end();
});

server.listen(3000);