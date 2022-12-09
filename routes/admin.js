const express  = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path')
const products = [];
// admin/add-product => GET
router.get('/add-product',(req,res,next)=>{
    console.log('1...in the middleware1!');
    res.render('add-product', {pageTitle: 'Add Product'})
})
// admin/product =>POST
router.post('/product',(req,res,next)=>{
    console.log(req.body,'2...in another middleware!');
    products.push({title:req.body.title})
    res.redirect('/')
})

exports.routes = router;
exports.products = products;
