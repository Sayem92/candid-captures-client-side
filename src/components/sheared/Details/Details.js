import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import UseTitle from '../../UseTitle/UseTitle';
import DisplayReview from '../DisplayReview/DisplayReview';


const Details = () => {
    UseTitle('details')
    // get mongo db review-------------
    const [allReviews, setAllReviews] = useState([]);
    // review text------
    const [review, setReview] = useState('');
    const { user } = useContext(AuthContext);
    // single service details------------
    const serDetails = useLoaderData();
    const { _id, img, title, price, body } = serDetails;

    // collect review text------
    const handleReviewChange = e => {
        const get = e.target.value;
    
        setReview(get);
        
    }


   
    // post review to mongodb---------------
    const addReview = () => {

        if(review === null){
            return
        }

        if (user) {
            const { displayName, email, photoURL } = user;
            const createReview = {
                reviewId: _id,
                reviewerName: displayName,
                photoURL,
                email,
                review,
                serviceName: title
            }


            fetch('https://assignment-11-server-candid-captures.vercel.app/addReview', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(createReview)
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('Add a new review successfully')
                    console.log("new review data", data);
                    let updateReview = []
                    if(data?.acknowledged){
                        updateReview = [ createReview, ...allReviews]
                        setAllReviews(updateReview)
                        setReview('')
                    }
                })


        }

    }

  

    // get review mongodb--------------
    useEffect(() => {
        fetch(`https://assignment-11-server-candid-captures.vercel.app/getReview/${_id}`)
            .then(res => res.json())
            .then(data => {
                setAllReviews(data)
                console.log("load review data", data);
            })

    }, []);





    return (
        <div className='p-2 lg:m-20 mb-10 mr-1'>
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
                        <p className="mb-3 font-medium text-black ">Price: $ {price}</p>
                        <p className="mb-3 font-normal text-gray-700 ">{body}</p>

                    </div>
                </div>
            </div>


            {/* all review  */}

            <div className='mt-4'>

                {
                    allReviews?.length === 0 ?
                    
                    <h1 className='text-3xl font-bold text-blue-500'>No review available</h1>

                    :

                    allReviews?.map(personReview => <DisplayReview
                        key={Math.random()*10}
                        personReview={personReview}

                    ></DisplayReview>)
                }


            </div>

            {/* add review textarea  */}
            <div className='lg:w-96 mt-4'>
                <p className='text-2xl font-semibold py-2'>Add Your Review</p>
                <textarea
                    onChange={handleReviewChange}
                    value={review}
                    placeholder="Your review" 
                    name='review' className="w-full h-28 p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  text-gray-900 border border-gray-600" required></textarea>
            </div>

            <div className=''>

                {
                    user ?

                        <button
                            onClick={addReview}
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