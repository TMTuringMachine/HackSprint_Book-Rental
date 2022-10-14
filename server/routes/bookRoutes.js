const express = require("express");
const router = express.Router();
const {
    addBooksFromCSV
} = require("../controllers/BookController");


router.post("/addFromCSV", addBooksFromCSV);


module.exports = router;
