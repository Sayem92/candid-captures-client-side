import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import UseTitle from '../UseTitle/UseTitle';

const MyReviewUpdate = () => {
    UseTitle('myReviewUpdate')
    const reviewUpdate = useLoaderData();

    const navigate = useNavigate()
    const { _id, serviceName, review, email } = reviewUpdate;



    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const review = form.newReview.value;

        const single = {
            review: review
        }


        fetch(`https://assignment-11-server-candid-captures.vercel.app/updateSingleReview/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(single)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Update successfully!!!!!!')
                console.log(data);
                form.reset();
                navigate('/myReviews')

            })

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
                            <label htmlFor="email" className="block mb-2 text-sm">Service Name</label>
                            <input type="text" defaultValue={serviceName} readOnly className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="text" className="block mb-2 text-sm">Edit Review</label>
                            <input type="text" name='newReview' defaultValue={review} className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
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