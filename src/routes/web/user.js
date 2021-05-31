const express = require('express');
const router = express.Router();

const userController = require('../../controllers/UserController');

router.get('/login', userController.index );
router.get('/register', userController.index );

module.exports = router;