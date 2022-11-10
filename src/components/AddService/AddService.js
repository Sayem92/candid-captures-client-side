import React from 'react';
import toast from 'react-hot-toast';
import UseTitle from '../UseTitle/UseTitle';

const AddService = () => {
    UseTitle('addService')
    

    const handleAddService = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.name.value;
        const img = form.photoURL.value;
        const price = form.price.value;
        const ratings = form.rating.value;
        const body = form.description.value;

        const addNewService = {
            title,
            img,
            price,
            ratings,
            body

        }


        //add new service---------------
        fetch('https://assignment-11-server-candid-captures.vercel.app/addNewService', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addNewService)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Add a new service successfully')
                console.log("new service data load", data);
            })

    }







    return (
        <div className='p-2 lg:m-20'>
            <section className="p-6 bg-gray-500 text-gray-50 rounded-lg">
                <form onSubmit={handleAddService}
                    className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-800">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="name" className="text-sm">Service Name</label>
                                <input type="text" name='name' placeholder="Service name" className="p-2 w-full h-10 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  text-gray-900" required />
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="photoURL" className="text-sm">Service PhotoURL</label>
                                <input type="text" name='photoURL' placeholder="Review PhotoURL" className="p-2 w-full h-10 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  text-gray-900" required />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="price" className="text-sm">Price</label>
                                <input type="text" name='price' placeholder="Price" className="p-2 w-full h-10  rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  text-gray-900" required />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="rating" className="text-sm">Rating</label>
                                <input type="text" name='rating' placeholder="Rating" className="p-2 w-full h-10 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  text-gray-900" required />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="description" className="text-sm">Description</label>
                                <textarea placeholder="Description" name='description' className="w-full h-28 p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  text-gray-900" required></textarea>
                            </div>


                            <button className="btn btn-success col-span-full lg:col-span-1">Add Service</button>
                        </div>

                    </fieldset>

                </form>
            </section>
        </div>
    );
};



export default AddService;