import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const serDetails = useLoaderData();
    // console.log(serDetails);
    const { _id, img, title, price, body } = serDetails;
    return (
        <div className='p-2 lg:m-20'>
            <div>
                <div className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <PhotoProvider
                     speed={() => 800}
                     easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                    >
                        <PhotoView src={img}>
                            <img style={{ objectFit: 'cover' }}  className="rounded-t-lg h-48 w-96" src={img} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                    <div className="p-5">

                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                        <p className="mb-3 font-medium text-black ">Price: ${price}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{body}</p>

                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Details;