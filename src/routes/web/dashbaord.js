const express = require('express');
const router = express.Router();

const dashbaordController = require('../../controllers/DashbaordController');

router.get('/', dashbaordController.dashboard );

module.exports = router;