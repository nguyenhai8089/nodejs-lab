const products = [];
exports.getAddProduct = (req,res,next)=>{
    console.log('1...in the middleware1!');
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'        
    })
}
exports.postAddProduct=(req,res,next)=>{
    console.log(req.body,'2...in another middleware!');
    products.push({title:req.body.title})
    res.redirect('/')
}
exports.getProduct=(req,res,next)=>{
    console.log(products)
    console.log('3...in another middleware!');    
    res.render('shop',{
            prods:products,
            pageTitle:'Shop',
            path:'/',
                       
        });
}
