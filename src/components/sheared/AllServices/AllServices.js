import React, { useEffect, useState } from 'react';
import ServicesCart from '../Services/ServicesCart';

const AllServices = () => {
    const [servicesAll, setServicesAll] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allServices')
            .then(res => res.json())
            .then(data => setServicesAll(data))
    }, [])

    return (
        <div className='p-2 lg:mx-20 mb-20'>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20'>
                {
                    servicesAll?.map(ser => <ServicesCart
                        key={ser.services_id}
                        ser={ser}

                    ></ServicesCart>)
                }

            </div>
        </div>
    );
};

export default AllServices;