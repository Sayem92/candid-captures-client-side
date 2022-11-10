import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServicesCart from './ServicesCart';

const Services = () => {
    const [services, setServices] = useState([]);
    const [load, setLoad] = useState(true)

    useEffect(() => {
        fetch('https://assignment-11-server-candid-captures.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoad(false)
            })
    }, [])

    if (load) {
        return <div className='lg:w-16 w-16  mx-auto  m-20'>
            <div className=" w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600"></div>
        </div>

    }


    return (
        <div className='p-2 lg:mx-20'>

            <h5 className="my-16 text-center text-3xl font-bold tracking-tight  text-orange-500">Services I Offered</h5>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    services?.map(ser => <ServicesCart
                        key={ser._id}
                        ser={ser}

                    ></ServicesCart>)
                }

            </div>

            <div className='text-center my-10'>
                <Link to='/allServices'>
                    <button className="btn btn-outline btn-warning">See All</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;