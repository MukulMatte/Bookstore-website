import React from 'react'

function Cards({ item }) {
    return (
        <>
            <div className='mt-4 md:px-20 px-4'>
                <div className="card w-70 bg-base-100 shadow-xl hover:scale-105">
                    <figure><img src={item.image} alt="Books" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                           {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions flex justify-between">
                            <div className="badge badge-outline">Rs{item.price}</div>
                            <div className="cursor-pointer px-2 py-1 rounded-lg  border-[2px] hover:bg-pink-500 hover:text-white duration-200 p-2">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards