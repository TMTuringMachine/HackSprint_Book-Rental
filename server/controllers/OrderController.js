const { response } = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto')
const Order =require('../models/OrderSchema')
const Book =require('../models/BookSchema');
const User = require('../models/UserSchema');
var jwt = require('jsonwebtoken');

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

const checkout= async (req,res)=>{
    const decodeToken = jwt.verify(req.headers.authorization, process.env.JWT_PRIVATE_KEY);
    if (decodeToken) {
        const user = await User.findById(decodeToken._id)
        console.log(user.email)
        if(user){
            console.log("okay user is verified")
            let cart =user.cart.items
            let books=cart.map((e)=>e.id)
            console.log("books here",books)
            var totalPrice=cart.total
            var {address,city,state,pincode} =req.body
            // let addressobj=await user.Addresses
            console.log("ADRESSsf ",user.Addresses)
            address1=user.Addresses.filter((e)=>e.address==address && 
                e.city==city && e.state==state && e.pincode ==pincode)
                console.log("now",address)
            if(address1.length!==0){
                console.log("is there")
              address=address1  
            }
            else{
                console.log("else here")
                User.updateOne(
                    {_id:user.id},
                        {$push:{Addresses:{
                    "address": address,
                    "city": city,
                    "state": state,
                    "pincode": pincode
                    }}}
                
                )
            //     User.updateOne({
            //         _id:user.id,
            //         $push:{Addresses:{
            //     "address": address,
            //     "city": city,
            //     "state": state,
            //     "pincode": pincode
            //     }}
            // })
            }
            // user.save()
            try {
            
                const order=new Order({
                    books,
                    totalPrice,
                    Address:address,
                    isOutForDelivery:false,
                    isDelivered:false,
                    isReturned:false
                })
                const ordersaved= await order.save()
                if(ordersaved){
                    let currrentals=user.rentals
                    user.set({rentals:currrentals.push({isActive:true,order:ordersaved})})
                    res.status(200).send({msg:"order checked out"})
                }
            } catch (error) {
                console.log("Error occured")
            }
        }
    }

    // console.log("User's cart here ")
    
    // booksarr=JSON.parse(booksarr)
    // booksarr=booksarr.split("',[]'")
    // console.log(booksarr,typeof(booksarr))
    // const userid=req.user
    // console.log(userid)
    // console.log(req.body)
    
    // console.log("here is the books array ",booksarr)
    // books=[]
    // booksarr.for (const iterator of boo) {
        
    // }
    // for (const iterator of cart) {
    //     // let bookobj=await Book.findById(iterator)
    //     // console.log(bookobj.id)
    //     books.push({
    //         bookDetails:await Book.findById(iterator)
    // })
    // }
    
    // console.log("books",books)
    
    
    
    }

module.exports = {
    checkout,
    createOrder,
    payment
};