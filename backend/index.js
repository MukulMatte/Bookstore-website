import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import Razorpay from "razorpay";


import bookRoute from "./Route/book.route.js";
import userRoute from "./Route/user.route.js";
import paymentRoute from "./Route/payment.route.js";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();




const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI

// connect to mongodb
try{
    mongoose.connect(URI);
    console.log("Connected to MongoDb")
}catch(error){
    console.log("Error: ", error)
}

//defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/payment", paymentRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});