const express = require('express')
const path = require('path');
const app =express();
const expressHbs= require('express-handlebars');


app.set('view engine', 'ejs');
app.set('views','views');

const rootDir = require('./util/path');

const bodyParser =require('body-parser');

const adminRoutes = require('./routes/admin')

const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req, res, next)=>{
    res.status(404).render('404',{
        pageTitle: 'Page Not Found',
        mainCSS:true, 
        path:''
    })
})

app.listen(3000);