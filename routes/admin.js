const express  = require('express');
const path = require('path');
const router = express.Router();
// admin/add-product => GET
router.get('/add-product',(req,res,next)=>{
    console.log('1...in the middleware1!');
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
})
// admin/product =>POST
router.post('/product',(req,res,next)=>{
    console.log(req.body,'2...in another middleware!');
    res.redirect('/')
})

module.exports = router;
