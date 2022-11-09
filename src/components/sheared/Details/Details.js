import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import DisplayReview from '../DisplayReview/DisplayReview';


const Details = () => {
    const [review, setReview] = useState('')
    const serDetails = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, img, title, price, body } = serDetails;
    const {displayName, email, photoURL} = user;

    // collect review text------
    const handleReviewChange = e =>{
        setReview(e.target.value);
    }

    //create new review--------
    const newReview = {
        reviewId : _id,
        reviewerName: displayName,   
        photoURL,
        email,
        review

    }

    const addReview = () =>{
            console.log(newReview);
       

    }

    return (
        <div className='p-2 lg:m-20 mb-10'>
            <div>
                <div className=" bg-white rounded-lg border  shadow-md  border-gray-300">
                    <PhotoProvider
                        speed={() => 800}
                        easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                    >
                        <PhotoView src={img}>
                            <img style={{ objectFit: 'cover' }} className="rounded-t-lg h-48 w-96" src={img} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                    <div className="p-5">

                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>
                        <p className="mb-3 font-medium text-black ">Price: ${price}</p>
                        <p className="mb-3 font-normal text-gray-700 ">{body}</p>

                    </div>
                </div>
            </div>

            {/* all review  */}

            <h5 className="mt-16 text-3xl font-bold tracking-tight  text-orange-500">Reviews</h5>
            <div className='mt-4'>

                <DisplayReview></DisplayReview>
                <DisplayReview></DisplayReview>
                <DisplayReview></DisplayReview>
                <DisplayReview></DisplayReview>
            </div>

                 {/* add review textarea  */}
            <div className='lg:w-96 mt-4'>
               <p className='text-2xl font-semibold py-2'>Add Your Review</p>
                <textarea onChange={handleReviewChange} placeholder="Your review" name='review' className="w-full h-28 p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  text-gray-900 border border-gray-600" required></textarea>
            </div>

            <div className=''>

                {
                    user ?
                       
                            <button onClick={addReview}
                            className="btn btn-success">Add a review</button>
                        
                        :
                        
                        <Link to='/login'>
                            <button className="btn btn-warning">Please login to add a review</button>
                        </Link>
                }


            </div>
        </div>
    );
};

export default Details;