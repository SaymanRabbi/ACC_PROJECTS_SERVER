const express = require('express');
const router = express.Router();
const {getStore,createStore,singelStore} = require('../Controllers/store.controller'); 

router.get('/',getStore)
router.post('/',createStore)
router.get('/:id',singelStore)
module.exports = router;