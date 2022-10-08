const express = require('express');
const router = express.Router();
const { brandController} = require('../Controllers/brand.controller');

router.post('/',brandController)
// router.get('/')
// router.patch('/bulk-update',)
// router.patch('/:id',)

module.exports = router;