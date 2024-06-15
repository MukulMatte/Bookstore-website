import mongoose, { trusted } from "mongoose";
import validator from "validator";

const paymentSchema = mongoose.Schema({
    paymenttype:{
        type:String,
        required:true

    },
    cardnumber:{
        type:String,
        required:true,
        length:16,
        patterns: [1234],
        gaps: [4, 8, 12, 16],
    },
    cname:{
        type:String,
        required:true,
    },
    ex_month:{
        type: String,
        required:true,
        minlength:2,
        maxlength: 2
    },
    ex_year:{
        type: String,
        required:true,
        minlength:4,
        maxlength: 4
    },
    cvc:{
        type:Number,
        required:true,
        minlength:2,
        maxlength: 2
    },
    price:{
        type:Number,
        required:true
    },
    book_title:{
        type:String,
        required: true
    },
    // userinfo: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'user_id'
    // }
})

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;