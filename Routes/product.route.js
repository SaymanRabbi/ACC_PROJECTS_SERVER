const express = require('express');
const router = express.Router();
const { postAproduct, getProducts,updateAProduct, updateProducts,fileUploadControler } = require('../Controllers/product.controller');
const { authorization } = require('../Middleware/authorization');
const uploader = require('../Middleware/uploader');
const veryfyToken = require('../Middleware/veryfyToken');
router.post('/file-upload',uploader.array("image"),fileUploadControler);
router.post('/',veryfyToken,authorization("admin","store-maneger"),postAproduct)
router.get('/',getProducts)
router.patch('/bulk-update',updateAProduct)
router.patch('/:id',updateProducts)

module.exports = router;