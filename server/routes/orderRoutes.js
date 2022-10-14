const express = require("express");
const router = express.Router();
const {
    createOrder,
    payment,
    addToCart
} = require("../controllers/OrderController");

const { isLoggedIn } = require("../middlewares/isLoggedIn");

router.post("/create", createOrder);
router.post("/pay",payment)
router.post('/addToCart',isLoggedIn,addToCart)


module.exports = router;