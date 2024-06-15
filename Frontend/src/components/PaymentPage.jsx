import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'

function PaymentPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const [data, setData]= useState({});

    useEffect(() => {
        // const getID = ()=>{
        //     try {
        //         const res =  localStorage.getItem("Users")
                
        //         if(res){
        //         setData(JSON.parse(res)); // Update the state with the fetched data
        //           console.log(res)}
        //       } catch (error) {
        //         console.error('Error fetching data:', error);
        //       }
        // };
        // getID();

        const fetchData =  () => {
            try {
              const response =  localStorage.getItem("books")
            //   const res =  localStorage.getItem("Users")
              
              if(response){
              setData(JSON.parse(response));
            //   setData(JSON.parse(res)); // Update the state with the fetched data
                console.log(response)
                // console.log(res)}
              }
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();
      }, []);
      

    const onSubmit = async (data) => {
        const paymentinfo ={
            paymenttype: data.paymenttype,
            cardnumber: data.cardnumber,
            cname : data.cname,
            ex_month : data.ex_month,
            ex_year: data.ex_year,
            cvc: data.cvc,
            // userinfo: data._id,
            price: data.price,
            book_title : data.book_title

        }
        await axios.post("http://localhost:4001/payment/payment", paymentinfo)
        .then((res)=>{
            console.log(res.data);
            if(res.data){
                toast.success('Payment Successful');
                window.location.href = '/sucess';
                localStorage.setItem("payments", JSON.stringify(res.data.user));
            }
        }).catch((err)=>{
            console.log(err);
            toast.error("Error: " + err.response.data.message)
        }) 


    }

    return (
        <>
            <div className='flex h-screen items-center justify-center '>
                <div className='modal-box'>
                    <h1 className="font-bold text-lg">Payment Page</h1>

                    <section>
                        <h2>Payment Information</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                            {/* <div className='mt-4 space-y-2 '>
                                <span>User Info:</span>
                                <br />
                                <input type="text" value={data._id} readOnly name="price" className='w-80 px-3 py-2 border rounded-md outline-none'
                                    {...register("_id", { required: true })} />

                                <br />
                                
                            </div> */}
                            <div className='mt-4 space-y-2 '>
                                <label>
                                    <input type="radio"  name="paymentMethod" value="credit card" 
                                    {...register("paymenttype", { required: true })}/>
                                    Credit Card
                                </label>
                                <br />
                                {errors.paymenttype && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className='mt-4 space-y-2 '>
                                <span>total:</span>
                                <br />
                                <input type="text" value={data.price} readOnly name="price" className='w-80 px-3 py-2 border rounded-md outline-none'
                                    {...register("price", { required: true })} />

                                <br />
                                
                            </div>
                            <div className='mt-4 space-y-2 '>
                                <span>Book-Title:</span>
                                <br />
                                <input type="text" value={data.title} readOnly name="book-title" className='w-80 px-3 py-2 border rounded-md outline-none'
                                    {...register("book_title", { required: true })} />

                                <br />
                               
                            </div>
                            <div className='mt-4 space-y-2 '>
                                <span>Card Number:</span>
                                <br />
                                <input type="text" name="cardNumber" className='w-80 px-3 py-2 border rounded-md outline-none'
                                    {...register("cardnumber", { required: true })} />

                                <br />
                                {errors.cardnumber && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className='mt-4 space-y-2 '>
                                <span>Expiration Month:</span>
                                <br />
                                <input type="text" name="expirationDate" className='w-80 px-3 py-2 border rounded-md outline-none'
                                    {...register("ex_month", { required: true })}
                                />
                                <br />
                                {errors.ex_month && <span className='text-sm text-red-500'>This field is required</span>}

                            </div>
                            <div className='mt-4 space-y-2 '>
                                <span>Expiration Year:</span>
                                <br />
                                <input type="text" name="expirationDate" className='w-80 px-3 py-2 border rounded-md outline-none'
                                    {...register("ex_year", { required: true })}
                                />
                                <br />
                                {errors.ex_year && <span className='text-sm text-red-500'>This field is required</span>}

                            </div>
                            <div className='mt-4 space-y-2 '>
                                <span>CVC:</span>
                                <br />
                                <input type="text" name="cvc" className='w-80 px-3 py-2 border rounded-md outline-none'
                                    {...register("cvc", { required: true })}
                                />
                                <br />
                                {errors.cvc && <span className='text-sm text-red-500'>This field is required</span>}

                            </div>
                            <div className='mt-4 space-y-2 '>
                                <span>Name on Card:</span>
                                <br />
                                <input type="text" name="nameOnCard" className='w-80 px-3 py-2 border rounded-md outline-none'
                                    {...register("cname", { required: true })} />
                                <br />
                                {errors.cname && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className='flex justify-around mt-4'>
                                <button type="name" className='bg-pink-500 text-white rounded-md px-3 py-1  mt-2 hover:bg-pink-700 duration-200'>Make Payment</button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </>
    )
}

export default PaymentPage