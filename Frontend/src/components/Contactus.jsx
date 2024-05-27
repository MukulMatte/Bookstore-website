import React from 'react'

import { useForm } from "react-hook-form"

function Contactus() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
        <div className='items-center max-w-screen-2xl container mx-auto md:px-20 p-8 flex flex-col  my-10
        '>
            
            <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog" >
            <h1 className='font-bold text-lg'>Contact Us</h1>
            <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br />
                <input type="text" 
                placeholder='Enter your full Name' className='w-80 px-3 py-2 border rounded-md outline-none'
                {...register("name", { required: true })}
                />
                <br />
                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br />
                <input type="email" 
                placeholder='Enter your Email' className='w-80 px-3 py-2 border rounded-md outline-none'
                {...register("email", { required: true })}
                />
                <br />
                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
                <span>Message</span>
                <br />
                <textarea 
                placeholder='Type your message' className='w-80 px-3 py-2 border rounded-md outline-none'
                {...register("text", { required: true })}
                />
                <br />
            
            </div>
            <button onSubmit className='bg-pink-500 mt-6 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Submit</button>
            </form>
            </div>
        </div>
        
    </>
  )
}

export default Contactus