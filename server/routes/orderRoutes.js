const express = require("express");
const router = express.Router();
const {
    checkout,
    createOrder,
    payment,
    addToCart,
    removeFromCart,
    getCart
} = require("../controllers/OrderController");

const { isLoggedIn } = require("../middlewares/isLoggedIn");

router.post("/create",isLoggedIn, createOrder);
router.post("/checkout",isLoggedIn, checkout);
router.post("/pay",isLoggedIn,payment)
router.post('/addToCart',isLoggedIn,addToCart)
router.post('/removeFromCart',isLoggedIn,removeFromCart)
router.get('/viewCart',isLoggedIn,getCart)




module.exports = router;