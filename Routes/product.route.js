const express = require('express');
const router = express.Router();
const { productControler, getProductControler,updateProductControler, bulkUpdateProduct } = require('../Controllers/product.controller');

router.post('/',productControler)
router.get('/',getProductControler)
router.patch('/bulk-update',bulkUpdateProduct)
router.patch('/:id',updateProductControler)

module.exports = router;