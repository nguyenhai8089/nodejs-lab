const express  = require('express');
const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    console.log('1...in the middleware1!');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>')
})

router.post('/product',(req,res,next)=>{
    console.log(req.body,'2...in another middleware!');
    res.redirect('/')
})

module.exports = router;
