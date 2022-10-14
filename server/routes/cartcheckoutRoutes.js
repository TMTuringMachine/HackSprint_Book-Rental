const express = require("express");
const router = express.Router();
const { checkout } =require('../controllers/CheckoutController')

router.route('/checkout')
.post(checkout)
// .delete()
module.exports=router

