import React from 'react'
import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <>
         <div className="flex flex-col items-center justify-center h-screen bg-base-200">
      <h1 className="lg:text-3xl bold">About Us</h1>
      <p className="text-lg">Welcome to our bookstore app!</p>
      <p className="text-lg">We are passionate about books and want to share that passion with you.</p>
      <p className="text-lg">Our app allows you to browse and purchase books from the comfort of your own home.</p>
      <br />
      <div>
        <p className="text-lg">If you have any query regarding our product please let us know at  <span className='underline cursor-pointer font-bold'>apnabookstore@gmail.com</span> <p /> 
        <p>You can also drop your thoughts at <Link to="/contact" className='underline text-blue-500 cursor-pointer'>Contact </Link>.....! </p></p>
      </div>
    </div>
    </>
  )
}

export default AboutUs