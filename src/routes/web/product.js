const express = require('express');
const router = express.Router();

const customerController = require('../../controllers/ProductController');

router.get('/product', customerController.index );
router.get('/product/create', customerController.index );
router.get('/product/edit/:id', customerController.index );

module.exports = router;