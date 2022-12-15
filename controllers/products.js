const Product = require('../models/product');
exports.getAddProduct = (req,res,next)=>{
    console.log('1...in the middleware1!');
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'        
    })
}
exports.postAddProduct=(req,res,next)=>{
    console.log(req.body,'2...in another middleware!');
    const product = new Product(req.body.title)
    product.save()    
    res.redirect('/')
}
exports.getProduct=(req,res,next)=>{
    
    console.log('3...in another middleware!');  
    Product.fetchAll(products=>{
        console.log(products)
        res.render('shop',{
            prods:products,
            pageTitle:'Shop',
            path:'/',
                       
        });
    });  
    
}
