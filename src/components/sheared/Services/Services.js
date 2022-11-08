import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServicesCart from './ServicesCart';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className='p-2 lg:mx-20'>

            <h5 className="my-16 text-center text-3xl font-bold tracking-tight  text-orange-500">My Services Photography Here</h5>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    services?.map(ser => <ServicesCart
                        key={ser.services_id}
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