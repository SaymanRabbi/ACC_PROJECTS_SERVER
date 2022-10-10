const express = require('express');
const router = express.Router();
const {getStore} = require('../Controllers/store.controller'); 

router.get('/',getStore)

module.exports = router;