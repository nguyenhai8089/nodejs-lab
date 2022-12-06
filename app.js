const express = require('express')

const app =express();

const bodyParser =require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    console.log('1...in the middleware1!');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>')
})

app.use('/product',(req,res,next)=>{
    console.log(req.body,'2...in another middleware!');
    res.redirect('/')
})

app.use('/',(req,res,next)=>{
    console.log('3...in another middleware!');
    res.send('<h1>hello from express</h1>')
})

app.listen(3000);