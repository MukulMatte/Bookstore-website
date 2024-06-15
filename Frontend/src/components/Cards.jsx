import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

function Cards({ item }) {
    // const ProductCard = ({ item }) => {
    //     const handleBuyClick = () => {
    //       // Simulate downloading the product (e.g., generating a PDF)
    //       // Replace this with your actual download logic
    //       console.log(`Downloading ${item.name}...`);
    //     };
    // }
    const navigate = useNavigate();
    const handleClick = async(data) => {
            const bookinfo ={
                title : item.title
            }

        await axios.post("http://localhost:4001/book/getbook", bookinfo)
        .then ((res)=>{
            console.log(res.data)
            localStorage.setItem("books", JSON.stringify(res.data.book));
            navigate("/payment");
        }) .catch ((error) =>{
            toast.error("Error:");
            console.log(error)
        })
        
      };
    return (
        <>
            <div className='mt-4 md:px-20 px-4'>
                <div className="card w-70 bg-base-100 shadow-xl hover:scale-105">
                    <figure><img src={item.image} alt="Books" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                           {item.name}
                           
                            
                        </h2>
                        <div className="badge badge-secondary">{item.category}</div>
                        <p>{item.title}</p>
                        <div className="card-actions flex justify-between">
                            <div className="badge badge-outline">Rs{item.price}</div>
                            
                                <button onClick={handleClick} className="btn hover:bg-pink-500 hover:text-white duration-200 p-2">Buy Now</button>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards