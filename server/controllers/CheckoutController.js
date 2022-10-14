const Order =require('../models/OrderSchema')
const Book =require('../models/BookSchema')


const checkout= async (req,res)=>{
var {booksarr,totalPrice} =req.body
// booksarr=JSON.parse(booksarr)
// booksarr=booksarr.split("',[]'")
console.log(booksarr,typeof(booksarr))

console.log(req.body)

// console.log("here is the books array ",booksarr)
books=[]
// booksarr.for (const iterator of boo) {
    
// }
for (const iterator of booksarr) {
    // let bookobj=await Book.findById(iterator)
    // console.log(bookobj.id)
    books.push({
        bookDetails:await Book.findById(iterator)
})
}

console.log("books",books)
try {
    const order=new Order({
        books,
        totalPrice,
        isOutForDelivery:false,
        isDelivered:false,
        isReturned:false
    })
    const ordersaved= await order.save()
    if(ordersaved)
        res.status(200).send({msg:"order checked out"})
} catch (error) {
    console.log("Error occured")
}


}


module.exports={
    checkout,
    
}