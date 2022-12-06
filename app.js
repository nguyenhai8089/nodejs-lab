
const http = require('http');

const express = require('express')

const app =express();

app.use((req,res,next)=>{
    console.log('in the middleware!');
    next();// chuyển đến middleware tiếp theo
})

app.use((req,res,next)=>{
    console.log('in another middleware!');
})

const server =http.createServer(app);

server.listen(3000);