import Payment from "../Model/payment.model.js";

export const payment = async(req,res)=>{
    try {
        const {paymenttype, cardnumber, cname, ex_month, ex_year, cvc, userinfo,price,book_title, _id, book_name} = req.body;
        const payment = new Payment({
            paymenttype: paymenttype,
            cardnumber: cardnumber,
            cname: cname,
            ex_month: ex_month,
            ex_year : ex_year,
            cvc: cvc,
            // userinfo: userinfo,
            price: price,
            book_title: book_title,
        })
        await payment.save();
        res.status(201).json({message:"Payment successful", payment:{
            _id: payment._id,
            userinfo: payment.userinfo
        }})
    } catch (error) {
        console.log("Error", + error.message);
        res.status(500).json({message:"Internal server error"})
        console.log(error)
    }
}