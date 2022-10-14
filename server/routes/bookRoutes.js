const express = require("express");
const router = express.Router();
const { checkout } =require('../controllers/BookController')

router.route('/:id')
.get()
.post()
.delete()
.put()