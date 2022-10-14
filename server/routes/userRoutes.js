const express = require('express');
const router = express.Router();
const { signup, login, jwtVerify } = require('../controllers/UserController');

// const { isAdmin } = require("../middlewares/isAdmin");

router.post('/signup', signup);
router.get('/jwtVerify', jwtVerify);
router.post('/login', login);

module.exports = router;
