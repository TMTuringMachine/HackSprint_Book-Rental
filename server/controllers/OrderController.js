const { response } = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const User = require('../models/UserSchema');

const createOrder = async(req,res)=>{
    var instance = new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET })
    const resp = instance.orders.create({
    amount: 50000,
    currency: "INR",
    receipt: "receipt#1",
    notes: {
        key1: "value3",
        key2: "value2"
    }
    },(err,response)=>{
        res.send(response)
    })
}

const payment = async(req,res)=>{
    // const webhookSecret = process.env.WEBHOOK_SECRET || "";
    // const shasum = crypto.createHmac("sha256", webhookSecret);
    // shasum.update(JSON.stringify(req.body));
    // const digest = shasum.digest("hex");
    // let razorSignature = req.headers["x-razorpay-signature"];
    // if (razorSignature && digest === razorSignature) {
    //     console.log(req.body)
    // //   return res.status(200).json({ ok: true, data: req.body });
    // } else {
    // //   return res.status(200).json({ ok: false });
    // }
    console.log("PAYMENT DONE")
    res.redirect("/success")
}

const addToCart = async(req,res)=>{
    const {id} = req.user;
    const {bookID} = req.body
    try {
        const user = await User.findById(id);
        const newCart = user.cart;
        newCart.push(bookID);
        const isAdded = await User.findByIdAndUpdate(id,{cart:newCart});
        if(isAdded){
            res.status(200).send({ message: 'Added To Cart' });
        }else{
            res.status(400).send({ message: 'Failed To Add To Cart' });
        }
    } catch (error) {
        res.status(400).send({ message: 'Something went wrong' });
    }
}

module.exports = {
    createOrder,
    payment,
    addToCart
};