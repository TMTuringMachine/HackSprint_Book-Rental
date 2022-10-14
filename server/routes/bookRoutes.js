const express = require('express');
const router = express.Router();
const {
  addBooksFromCSV,
  getAllBooks,
  getSingleBook,
  addSingleBook,
} = require('../controllers/BookController');

const {
    rateabook
} =require('../controllers/RatingController')

const multer = require('multer');
const storage = require('multer-storage-cloudinary');
const { Router } = require('express');
const { isLoggedIn } = require('../middlewares/isLoggedIn');
const upload = multer({ storage });
router.get('/getAll', getAllBooks);
router.get('/getBook/:id', getSingleBook);
router.post('/addFromCSV', addBooksFromCSV);
router.post('/addSingleBook', upload.single('image'), addSingleBook);
router.get('/rate/:id/:rating',isLoggedIn,rateabook)
module.exports = router;
