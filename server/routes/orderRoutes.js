const express = require("express");
const router = express.Router();
const {
    createOrder,
    payment,
    addToCart,
    removeFromCart,
    getCart,
    checkout
} = require("../controllers/OrderController");

const { isLoggedIn } = require("../middlewares/isLoggedIn");

router.post("/create", createOrder);
router.post("/pay",payment)
router.post('/addToCart',isLoggedIn,addToCart)
router.post('/removeFromCart',isLoggedIn,removeFromCart)
router.get('/viewCart',isLoggedIn,getCart)
router.post('/checkout',isLoggedIn,checkout)




module.exports = router;