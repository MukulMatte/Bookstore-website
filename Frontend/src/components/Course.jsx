import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import {Link} from "react-router-dom"

function Course() {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div className='mt-28 items-center justify-center text-center'>
                 <h1 className='text-2x1 font-semibold md:text-4xl'>Welcome..! to the World of Books.... <span className='text-pink-500'>We are Happy to have you here</span></h1>
                 <p className='mt-12'>"Step into our world of literary wonders, where every book is a gateway to new adventures, knowledge, and inspiration. Explore our vast collection spanning genres from timeless classics to contemporary bestsellers. Immerse yourself in the magic of storytelling and embark on a journey through the ages. Whether you're seeking thrilling adventures, heartwarming tales, or profound insights, you'll find treasures waiting to be discovered on our shelves. Welcome to our bookstore – your haven for all things literary."</p>
                 <Link to="/">
                 <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
                 </Link>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                {
                    list.map((item)=>(
                        <Cards keys={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Course