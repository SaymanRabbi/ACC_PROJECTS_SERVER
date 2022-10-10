const express = require('express');
const router = express.Router();
const { createBrand,getBrand,singelBrand} = require('../Controllers/brand.controller');

router.post('/',createBrand)
router.get('/',getBrand)
router.get('/:id',singelBrand)


module.exports = router;