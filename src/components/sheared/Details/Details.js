import React from 'react';
import { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import DisplayReview from '../DisplayReview/DisplayReview';


const Details = () => {
    const serDetails = useLoaderData();
    const { user, setServicesIdReview } = useContext(AuthContext);
    // console.log(serDetails);
    const { _id, img, title, price, body } = serDetails;

    setServicesIdReview(_id)

    console.log(_id);
    return (
        <div className='p-2 lg:m-20'>
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

                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">{title}</h5>
                        <p className="mb-3 font-medium text-black ">Price: ${price}</p>
                        <p className="mb-3 font-normal text-gray-700 text-gray-400">{body}</p>

                    </div>
                </div>
            </div>

            {/* all review  */}
            <h5 className="my-16 text-center text-3xl font-bold tracking-tight  text-orange-500">Reviews</h5>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16'>


                <DisplayReview></DisplayReview>
                <DisplayReview></DisplayReview>
                <DisplayReview></DisplayReview>
                <DisplayReview></DisplayReview>
            </div>

            <div className='mx-5 my-10 w-full lg:m-10'>

                {
                    user ?
                        <Link to='/addReview'>
                            <button className="btn btn-success">Add a review</button>
                        </Link>
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