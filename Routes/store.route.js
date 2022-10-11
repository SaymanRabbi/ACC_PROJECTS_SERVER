const express = require('express');
const router = express.Router();
const {getStores,createAstore,getAstore} = require('../Controllers/store.controller'); 

router.get('/',getStores)
router.post('/',createAstore)
router.get('/:id',getAstore)
module.exports = router;