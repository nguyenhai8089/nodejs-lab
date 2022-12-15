const express  = require('express');
const path = require('path');
const router = express.Router();
const productsController = require('../controllers/products')

// admin/add-product => GET
router.get('/add-product', productsController.getAddProduct)
// admin/product =>POST
router.post('/product', productsController.postAddProduct)

module.exports = router;
