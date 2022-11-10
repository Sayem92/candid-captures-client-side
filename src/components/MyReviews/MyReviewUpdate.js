import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyReviewUpdate = () => {
    const reviewUpdate = useLoaderData();
    // console.log(review);
    const { _id, serviceName, review, email } = reviewUpdate;



    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const newReview = form.newReview.value;

        console.log(newReview, _id);
        // const single ={
        //     newReview
        // }

        // fetch(`http://localhost:5000/updateSingleReview/${_id}`, {
        //     method: "PUT",
        //     headers:{
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify({newReview})
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         toast.success('Update successfully!!!!!!')
        //         console.log(data);

        //     })

    }




    return (
        <div className='p-2 my-16 lg:m-20 '>
            <div className="flex flex-col lg:w-96 mx-auto p-6 rounded-md sm:p-10 bg-gray-900 text-gray-200">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Update Review</h1>

                </div>
                <form onSubmit={handleUpdate}
                    className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label for="email" className="block mb-2 text-sm">Service Name</label>
                            <input type="text" defaultValue={serviceName} readOnly className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                        </div>
                        <div>
                            <label for="text" className="block mb-2 text-sm">Edit Review</label>
                            <input type="text" name='newReview' defaultValue={review} className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" required />
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" defaultValue={email} readOnly className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                        </div>


                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type='submit' className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Update Review</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyReviewUpdate;