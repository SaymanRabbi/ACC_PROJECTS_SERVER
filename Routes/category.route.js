const express = require('express');
const router = express.Router();
const {getAllCategory, createCategory} = require('../Controllers/category.controller');

router.get('/',getAllCategory)
router.post('/',createCategory)

module.exports = router;