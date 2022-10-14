const express = require('express');
const router = express.Router();
const {
  addBooksFromCSV,
  addSingleBook,
} = require('../controllers/BookController');

const multer = require('multer');
const storage = require('multer-storage-cloudinary');
const upload = multer({ storage });

router.post('/addFromCSV', addBooksFromCSV);
router.post('/addSingleBook', upload.single('image'), addSingleBook);
module.exports = router;
