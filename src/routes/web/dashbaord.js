const express = require('express');
const router = express.Router();

const dashbaordController = require('../../controllers/DashbaordController');

router.get('/dashboard', dashbaordController.dashboard );

module.exports = router;