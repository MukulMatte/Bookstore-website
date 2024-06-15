import Book from "../Model/book.model.js";

export const getBook=async(req,res)=>{
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error", error);
        res.ststus(500).json(error);
    }
}


// get book by title
export const getBookByTitle=async(req,res)=>{
    try {
        const {title} = req.body;
        const book = await Book.findOne({title});
        
        res.status(200).json({message:"books", book:{
                title: book.title,
                price: book.price,
                file: book.file
        }})
     } catch (error) {
        console.log("Error" + error.message);
        res.status(500).json({message:"Internal server error"});
    }
}