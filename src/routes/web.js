const express = require('express');
const router = express.Router();

router.use(require("./web/dashbaord"));
router.use(require("./web/ecomerce"));
//router.use(require("./web/user"));
//router.use(require("./web/product"));

module.exports = router;