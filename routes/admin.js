const express  = require('express');
const router = express.Router();
// admin/add-product => GET
router.get('/add-product',(req,res,next)=>{
    console.log('1...in the middleware1!');
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>')
})
// admin/product =>POST
router.post('/product',(req,res,next)=>{
    console.log(req.body,'2...in another middleware!');
    res.redirect('/')
})

module.exports = router;
