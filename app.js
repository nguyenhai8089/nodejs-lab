const express = require('express')
const path = require('path');
const app =express();
const errorController =require('./controllers/error')

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

app.use(errorController.get404)

app.listen(3000);