
const http = require('http');

const express = require('express')

const app =express();

app.use('/',(req, res, next)=>{
    console.log('1...This always runs!');
    next();
})

app.use('/add-product',(req,res,next)=>{
    console.log('2....in the middleware1!');
    res.send('<h1>The "Add product" Page</h1>')
})

app.use('/',(req,res,next)=>{
    console.log('3...in another middleware!');
    res.send('<h1>hello from express</h1>')
})

const server =http.createServer(app);

server.listen(3000);