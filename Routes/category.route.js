const express = require('express');
const router = express.Router();
const {getAllCategory, createACategory} = require('../Controllers/category.controller');

router.get('/',getAllCategory)
router.post('/',createACategory)

module.exports = router;