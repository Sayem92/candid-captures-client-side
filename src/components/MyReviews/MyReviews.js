import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import UseTitle from '../UseTitle/UseTitle';
import MyReviewCart from './MyReviewCart';


const MyReviews = () => {
    UseTitle('myReviews')
    const [load, setLoad] = useState(true)
    const [reviewsDisplay, setReviewsDisplay] = useState([])
    const { user } = useContext(AuthContext);


    useEffect(() => {

        fetch(`https://assignment-11-server-candid-captures.vercel.app/myReviews?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem("candid-token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log("my reviews all----", data);

                setReviewsDisplay(data)

                setLoad(false)

            })
    }, [user])

    if (load) {
        return (<div className='lg:w-16 w-16  mx-auto  m-20'>
            <div className=" w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600"></div>
        </div>)

    }

    //conditional reviews show--------- 
    if (reviewsDisplay.length === 0) {
        return (<h1 className='text-3xl text-center font-bold my-10'>No reviews were added</h1>)
    }


    const handleDelete = _id => {
        const agree = window.confirm("Are you want to delete this review!!")
        if (agree) {
            fetch(`https://assignment-11-server-candid-captures.vercel.app/myReviews/${_id}`, {
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
        <div className='p-2 my-5 mr-1 lg:m-10'>

            <div>

                {
                    reviewsDisplay?.map(info => <MyReviewCart
                        key={Math.random() * 10}
                        info={info}
                        handleDelete={handleDelete}
                    ></MyReviewCart>)
                }

            </div>

        </div>

    );
};

export default MyReviews;

