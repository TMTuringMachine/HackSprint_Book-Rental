const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required:true,
  },
  image: {
    type: String,
  },
  author: {
    type: String,
    required:true
  },
  rentPrice: {
    type: String,
    required:true
  },
  rating:{
    type:Number,
    min:0,
    max:5,
  },
  stock:{
    type:Number
  }
});

const Book = mongoose.model("BOOK", bookSchema);

module.exports = Book; 