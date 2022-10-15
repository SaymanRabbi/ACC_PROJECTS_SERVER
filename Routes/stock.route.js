const express = require('express');
const router = express.Router();
const { createAstock, getstocks,updateAstock, updatestocks } = require('../Controllers/stock.controller');
router.post('/',createAstock)
router.get('/',getstocks)
router.patch('/bulk-update',updateAstock)
router.patch('/:id',updatestocks)

module.exports = router;