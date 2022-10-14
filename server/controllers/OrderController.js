const { response } = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const User = require("../models/UserSchema");
const Order = require("../models/OrderSchema")
const Book = require("../models/BookSchema");

const createOrder = async (req, res) => {
  var instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
  const resp = instance.orders.create(
    {
      amount: 50000,
      currency: "INR",
      receipt: "receipt#1",
      notes: {
        key1: "value3",
        key2: "value2",
      },
    },
    (err, response) => {
      res.send(response);
    }
  );
};

const payment = async (req, res) => {
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
  console.log("PAYMENT DONE");
  res.redirect("/success");
};

const addToCart = async (req, res) => {
  const { id } = req.user;
  const { bookID } = req.body;
  try {
    const user = await User.findById(id);
    const book = await Book.findById(bookID);
    let newCart = user.cart;
    newCart.items.push(bookID);
    newCart.total += Number(book.rentPrice);
    const isAdded = await User.findByIdAndUpdate(id, {
      cart: newCart,
    }).populate("cart");
    if (isAdded) {
      res.status(200).send({ message: "Added To Cart", cart: isAdded.cart });
    } else {
      res.status(400).send({ message: "Failed To Add To Cart" });
    }
  } catch (error) {
    res.status(400).send({ message: "Something went wrong" ,error});
  }
};

const removeFromCart = async (req, res) => {
  const { id } = req.user;
  const { bookID } = req.body;
  try {
    const user = await User.findById(id).populate('cart');
    const newCart = user.cart;
    const updatedCart = newCart.filter((item) => {
        console.log(item,"HERE")
        item.valueOf() !== bookID});
    // const isAdded = await User.findByIdAndUpdate(id, { cart: updatedCart });
    // if (isAdded) {
    //   res.status(200).send({ message: "Removed From Cart" });
    // } else {
    //   res.status(400).send({ message: "Failed To Remove From Cart" });
    // }
  } catch (error) {
    res.status(400).send({ message: "Something went wrong" });
  }
};

const getCart = async (req, res) => {
  const { id } = req.user;
  const getCart = await User.findById(id).populate("cart");
  if (getCart.cart) {
    res.status(200).send({ message: "Cart Fetched", cart: getCart.cart });
  } else {
    res.status(400).send({ message: "Failed to fetch Cart" });
  }
};

const checkout = async (req, res) => {
    const user = req.user
    let address11;
    if (user) {
      console.log("okay user is verified");
      let cart = user.cart.items;
      let books = cart?.map((e) => e.id);
      console.log("books here", books);
      var totalPrice = cart.total;
      var { address, city, state, pincode } = req.body;
      // let addressobj=await user.Addresses
      console.log("ADRESSsf ", user.Addresses);
      let address1 = user.Addresses.filter(
        (e) =>
          e.address == address &&
          e.city == city &&
          e.state == state &&
          e.pincode == pincode
      );
      console.log("now", address);
      if (address1.length !== 0) {
        console.log("is there");
        address11 = { address, city, state, pincode };
      } else {
        console.log("else here");
        let prev = user.Addresses;
        prev.push({ address, city, state, pincode });
        address11 = { address, city, state, pincode };
        const userupdate = await User.findByIdAndUpdate(user.id, {
          Addresses: prev,
        });
      }
      try {
        console.log(address11);

        const order = new Order({
          books,
          totalPrice,
          Address: address11,
          isOutForDelivery: false,
          isDelivered: false,
          isReturned: false,
        });
        const ordersaved = await order.save();
        if (ordersaved) {
          let currrentals = user.rentals;
          currrentals.push({ isActive: true, order: ordersaved })
          console.log("HERE",user)
          const usr = await User.findByIdAndUpdate(user.id,{ rentals:currrentals,cart:{
            items:[],
            total:0
          }})

        if(usr) res.status(200).send({ message: "order checked out" });
        }
      } catch (error) {
        res.status(403).send({ message: "error occured" });

        console.log("Error occured");
      }
    }
  
};

const getRentals = async(req,res)=>{

    const {id} = req.user

    const user = await User.findById(id);
    if(user.rentals.length!==0){
        res.status(200).send({message:"Fetched All Rentals",rentals:user.rentals},)
    }else{
        res.status(403).send({ message: "Something Went Wrong" });
    }
}


module.exports = {
  createOrder,
  payment,
  addToCart,
  removeFromCart,
  getCart,
  checkout,
  getRentals
};
