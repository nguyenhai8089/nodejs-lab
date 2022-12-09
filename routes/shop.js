const express  = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path')
const adminData = require('./admin');

router.get('/',(req,res,next)=>{
    console.log(adminData.products)
    console.log('3...in another middleware!');
    const products = adminData.products;
    res.render('shop',{prods:products, pageTitle:'Shop', path:'/', hasProducts:products.length>0});
})

module.exports = router;