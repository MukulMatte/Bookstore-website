import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name : String,
    price : Number,
    category : String,
    image : String,
    auther : String,
    title : String,
    file: String
})
const Book = mongoose.model("Book", bookSchema);

export default Book;