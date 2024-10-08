import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import axios from "axios"
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function Freebook() {
  const [book,setBook] = useState([])
    useEffect(()=>{
        const getBook = async()=>{
            try {
             const res = await  axios.get("https://bookstore-websitebackend.onrender.com/book");
             
             const data = res.data.filter((data)=> data.category === "Free")
             setBook(data);
             console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        getBook();
    },[])
   
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div>
                <h1 className='font-bold text-xl pb-2'>Free Offerred Books</h1>
                <p>Just jump into pool of knowledge with our free books, explore new world of freebooks with ApnaBookStore...!</p>
            </div>
        </div>

        <div >
      <Slider {...settings}>
        {book.map((item) => (
            <Cards item={item} key={item.id} />
        ))}
      </Slider>
    </div>
    </>
  )
}

export default Freebook
