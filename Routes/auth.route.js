const express = require('express');
const { signupController,loginController,veryfyme,confirmation } = require('../Controllers/auth.controller');
const veryfyToken = require('../Middleware/veryfyToken');
const router = express.Router();

router.post('/signup',signupController)
router.post("/login",loginController)
router.get('/me',veryfyToken,veryfyme)
router.get('/confirmation/:token',confirmation)



module.exports = router;