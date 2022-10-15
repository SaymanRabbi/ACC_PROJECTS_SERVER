const express = require('express');
const router = express.Router();
const { postAproduct, getProducts,updateAProduct, updateProducts,fileUploadControler } = require('../Controllers/product.controller');
const uploader = require('../Middleware/uploader');
router.post('/file-upload',uploader.array("image"),fileUploadControler);
router.post('/',postAproduct)
router.get('/',getProducts)
router.patch('/bulk-update',updateAProduct)
router.patch('/:id',updateProducts)

module.exports = router;