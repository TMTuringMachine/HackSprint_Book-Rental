const { copyFile } = require('fs/promises');
const Book = require('../models/BookSchema')
const addBooksFromCSV = async(req,res)=>{

    const books = req.body.data

    for (const book of books){
        const newBook = new Book({
            name:book[0],
            isbn:book[1],
            author:book[2],
            rentPrice:book[3],
            stock:1
        })

        const bookAdded = newBook.save();
        if(bookAdded){
            // console.log("BOOK ADDDED")
        }
    }

    res.status(200).send({ message: 'All Books Added' });

}

const getAllBooks = async (req,res)=>{
    const books = await Book.find();
    if(books){
        res.status(200).send({ message: 'Fetched All Books',books });
    }else{
        res.status(400).send({ message: 'Failed to fetch' });
    }
}

const getSingleBook = async(req,res)=>{
    const id = req.params.id
    const book = await Book.findById(id);
    if(book){
        res.status(200).send({ message: 'Fetched Book',book });
    }else{
        res.status(400).send({ message: 'Failed to fetch' });
    }
}

module.exports = {
    addBooksFromCSV,
    getAllBooks,
    getSingleBook
};
