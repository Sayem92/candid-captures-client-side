import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewCart from './MyReviewCart';


const MyReviews = () => {
    const [reviewsDisplay, setReviewsDisplay] = useState([])
    const { user } = useContext(AuthContext);


    useEffect(() => {
        fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log("my reviews all----", data);
                setReviewsDisplay(data)

            })
    }, [user])

    //conditional reviews show--------- 
    if (reviewsDisplay.length === 0) {
        return <h1 className='text-3xl text-center font-bold my-10'>No reviews were added</h1>
    }

    return (
        <div className='p-2 lg:m-10'>
                    
                {
                    reviewsDisplay?.map(info => <MyReviewCart
                        key={info._id}
                        info={info}
                    ></MyReviewCart>)
                }
               
            </div>
        
    );
};

export default MyReviews;

