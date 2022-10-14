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

module.exports = {
    addBooksFromCSV
};
