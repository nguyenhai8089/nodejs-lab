const express = require('express')
const path = require('path');
const app =express();
const rootDir = require('./util/path');

const bodyParser =require('body-parser');

const adminData = require('./routes/admin')

const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})

app.listen(3000);