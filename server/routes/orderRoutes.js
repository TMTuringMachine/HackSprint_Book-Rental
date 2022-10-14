const express = require("express");
const router = express.Router();
const {
    createOrder,
    payment
} = require("../controllers/OrderController");

// const { isAdmin } = require("../middlewares/isAdmin");

router.post("/create", createOrder);
router.post("/pay",payment)


module.exports = router;