const express = require('express');
const router = express.Router();

const ecomerceController = require('../../controllers/EcomerceController');

router.get('/', ecomerceController.ecomerce );

module.exports = router;