import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Sucess() {
    const navigate = useNavigate();




    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = () => {
            try {
                const response = localStorage.getItem("books")


                if (response) {
                    setData(JSON.parse(response));

                    console.log(response)

                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleRemoveItem = () => {
        // Remove the item with the key 'myDataStorage'
        localStorage.removeItem("books")
        navigate('/');
    };

    return (
        <>

            <div className='flex h-screen items-center justify-center '>
                <div>
                    
                    <div className="">
                        <h1>You can Download book from here....</h1>
                        <a href={data.file} target='_blank'>
                            <button className="btn hover:bg-pink-500 hover:text-white duration-200 p-2 justify-center">Download</button>
                        </a>
                    </div>
                    
                    <div className='mt-4 space-y-2 '>
                    <h1>Thank you for visiting our Bookstore.... have a happy reading....</h1>
                        <button onClick={handleRemoveItem} className="btn hover:bg-pink-500 hover:text-white duration-200 p-2 justify-center">
                            Back
                        </button>

                    </div>
                </div>
            </div>





        </>
    )
}

export default Sucess