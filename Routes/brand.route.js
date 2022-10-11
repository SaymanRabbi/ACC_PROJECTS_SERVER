const express = require('express');
const router = express.Router();
const { createAbrand,getBrands,getAbrand} = require('../Controllers/brand.controller');

router.post('/',createAbrand)
router.get('/',getBrands)
router.get('/:id',getAbrand)


module.exports = router;