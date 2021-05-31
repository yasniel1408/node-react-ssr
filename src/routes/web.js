const express = require('express');
const router = express.Router();

router.use(require("./web/dashbaord"));
router.use(require("./web/user"));

module.exports = router;