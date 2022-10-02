const express = require('express');
const router = express.Router();
const { productControler } = require('../Controllers/product.controller');

router.post('/',productControler)

module.exports = router;