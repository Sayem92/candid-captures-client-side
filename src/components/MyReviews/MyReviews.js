import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
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


    const handleDelete = _id => {
        const agree = window.confirm("Are you want to delete this review!!")
        if (agree) {
            fetch(`http://localhost:5000/myReviews/${_id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success("deleted successfully")
                        const remaining = reviewsDisplay.filter(rewv => rewv._id !== _id)
                        setReviewsDisplay(remaining)
                    }
                })
        }
    }

    return (
        <div className='p-2 lg:m-10'>

            {
                reviewsDisplay?.map(info => <MyReviewCart
                    key={info._id}
                    info={info}
                    handleDelete={handleDelete}
                ></MyReviewCart>)
            }

        </div>

    );
};

export default MyReviews;

