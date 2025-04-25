const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
//moves out routes for use in index.js 
module.exports = router;
