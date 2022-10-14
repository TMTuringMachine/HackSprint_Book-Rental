const Book = require('../models/BookSchema');
const { copyFile } = require('fs/promises');

const addBooksFromCSV = async (req, res) => {
  const books = req.body.data;

  for (const book of books) {
    const newBook = new Book({
      name: book[0],
      isbn: book[1],
      author: book[2],
      rentPrice: book[3],
      stock: 1,
      numratings: 0,
    });

    const bookAdded = newBook.save();
    if (bookAdded) {
      // console.log("BOOK ADDDED")
    }
  }

  res.status(200).send({ message: 'All Books Added' });
};
const addSingleBook = async (req, res) => {
  const { name, isbn, author, rentPrice, stock } = req.body;
  try {
    let image =
      'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2112&q=80';
    if (req.file) {
      console.log(req.file);
      image = req.file.path;
    }
    const book = await Book.create({
      name,
      isbn,
      author,
      rentPrice,
      stock,
      image,
    });
    if (book) {
      res.status(200).send({ message: 'Book added successfully!', data: book });
      return;
    }
    res.status(400).send({ message: 'some error occurred' });
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: 'server error' });
  }
};

const getAllBooks = async (req, res) => {
  const books = await Book.find();
  if (books) {
    res.status(200).send({ message: 'Fetched All Books', books });
  } else {
    res.status(400).send({ message: 'Failed to fetch' });
  }
};

const getSingleBook = async (req, res) => {
  const id = req.params.id;
  const book = await Book.findById(id);
  if (book) {
    res.status(200).send({ message: 'Fetched Book', book });
  } else {
    res.status(400).send({ message: 'Failed to fetch' });
  }
};

module.exports = {
  addBooksFromCSV,
  getAllBooks,
  getSingleBook,
  addSingleBook,
};
