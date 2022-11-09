import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AddReview = () => {
    const {user , serviceIdReview} = useContext(AuthContext)

    const handleAddReview = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const time = form.time.value;
        const rating = form.rating.value;
        const review = form.review.value;

        // console.log(name, photoURL, email, time, rating, review);

        const newReview = {
            serviceIdReview,
            name,
            photoURL,
            email,
            time,
            rating,
            review

        }

        // console.log(newReview);
    }

    return (
        <div className='p-2 lg:m-20'>
            <section className="p-6 bg-gray-500 text-gray-50 rounded-lg">
                <form onSubmit={handleAddReview}
                    className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-800">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="name" className="text-sm">Full Name</label>
                                <input type="text" name='name' defaultValue={user?.displayName} readOnly placeholder="Full name" className="p-2 w-full h-10 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  text-gray-900" />
                            </div>
                            
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="photoURL" className="text-sm">Review PhotoURL</label>
                                <input type="text" name='photoURL' defaultValue={user?.photoURL} readOnly placeholder="Review PhotoURL" className="p-2 w-full h-10 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input type="email" name='email' placeholder="Email" defaultValue={user?.email} readOnly className="p-2 w-full h-10  rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="time" className="text-sm">Time</label>
                                <input type="text" name='time' placeholder="Time" className="p-2 w-full h-10 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  text-gray-900" required/>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="rating" className="text-sm">Rating</label>
                                <input type="text" name='rating' placeholder="Rating" className="p-2 w-full h-10 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  text-gray-900" required/>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="bio" className="text-sm">Bio</label>
                                <textarea placeholder="Your review" name='review' className="w-full h-28 p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  text-gray-900" required></textarea>
                            </div>


                            <button className="btn btn-success col-span-full lg:col-span-1">Add Review</button>
                        </div>

                    </fieldset>

                </form>
            </section>
        </div>
    );
};

export default AddReview;