const express = require("express");
const router = express.Router();
const {
    createOrder,
    payment,
    addToCart,
    removeFromCart
} = require("../controllers/OrderController");

const { isLoggedIn } = require("../middlewares/isLoggedIn");

router.post("/create", createOrder);
router.post("/pay",payment)
router.post('/addToCart',isLoggedIn,addToCart)
router.post('/removeFromCart',isLoggedIn,removeFromCart)



module.exports = router;