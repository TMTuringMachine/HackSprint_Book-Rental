const RatingModel =require('../models/RatingSchema')
const BookModel =require('../models/BookSchema')

const rateabook=async (req,res)=>{
    const bookid=req.params.id
    const rating=req.params.rating
    try {
        const book=await BookModel.findById(bookid)
        console.log("book here",book,rating)
        let newrating=(book.rating + rating)/(book.numratings)
        const book1= await BookModel.findByIdAndUpdate(bookid,{rating: newrating, numratings:book.numratings+1})
        const newrate=new RatingModel({userid:req.user._id, bookid,rating})
        newrate.save()
        res.status(200).send({message:"rating updated"})
    } catch (error) {
        console.log(error)
        res.status(403).send({message:"error occured"})

    }
}

module.exports={
    rateabook
}