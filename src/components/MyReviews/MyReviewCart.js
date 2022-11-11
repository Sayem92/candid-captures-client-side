import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewCart = ({info, handleDelete}) => {
    
    const { serviceName, email, review, _id } = info;
    

    return (
      
        <div className='mt-5 border lg:w-96  bg-gray-800 p-3 rounded-lg'>
        
                    <h2 className="mb-1 text-xl font-semibold text-yellow-400">{serviceName}</h2>

                    <p className="text-sm text-gray-400">{review}</p>
                  
                    <p className='mb-6 mt-2 text-sm text-gray-400'>Email: {email}</p>

                   <Link to={`/myReviewUpdate/${_id}`}>
                   <button className="btn btn-sm btn-primary mr-5">Edit</button>
                   </Link>

                    <button onClick={()=> handleDelete(_id)}
                    className="btn btn-sm btn-error">Delete</button>
                </div>

               
               
    );
};

export default MyReviewCart;