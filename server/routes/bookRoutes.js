const express = require("express");
const router = express.Router();
const {
    addBooksFromCSV,
    getAllBooks,
    getSingleBook
} = require("../controllers/BookController");

router.get("/getAll",getAllBooks)
router.get("/getBook/:id",getSingleBook)
router.post("/addFromCSV", addBooksFromCSV);


module.exports = router;
