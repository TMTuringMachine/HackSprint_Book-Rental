const { response } = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto')

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

module.exports = {
    createOrder,
    payment
};