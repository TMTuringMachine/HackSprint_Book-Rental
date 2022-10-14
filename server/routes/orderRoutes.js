const express = require("express");
const router = express.Router();
const {
    checkout,
    createOrder,
    payment
} = require("../controllers/OrderController");


// const { isAdmin } = require("../middlewares/isAdmin");

router.post("/create", createOrder);
router.post("/pay",payment)
router.route('/cartcheckout')
.post(checkout)
// .get(showcart)

module.exports = router;