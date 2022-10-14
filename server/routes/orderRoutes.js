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

<<<<<<< HEAD

// const { isAdmin } = require("../middlewares/isAdmin");

router.post("/create", createOrder);
router.post("/pay",payment)
router.route('/cartcheckout')
.post(checkout)
// .get(showcart)
=======
const { isLoggedIn } = require("../middlewares/isLoggedIn");

router.post("/create", createOrder);
router.post("/pay",payment)
router.post('/addToCart',isLoggedIn,addToCart)
router.post('/removeFromCart',isLoggedIn,removeFromCart)
router.get('/viewCart',isLoggedIn,getCart)



>>>>>>> ecf5eaf3194e24273300b99c0b6ba67a3ec99f6d

module.exports = router;