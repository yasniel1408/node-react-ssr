const express = require('express');
const router = express.Router();

const productController = require('../../controllers/ProductController');

router.get('/product', productController.findAll );
router.post('/product', productController.create );
router.put('/product/:id', productController.update );

module.exports = router;