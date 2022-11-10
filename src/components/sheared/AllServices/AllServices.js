import React, { useEffect, useState } from 'react';
import UseTitle from '../../UseTitle/UseTitle';
import ServicesCart from '../Services/ServicesCart';

const AllServices = () => {
    UseTitle('allServices')
    const [servicesAll, setServicesAll,] = useState([])
    const [load, setLoad] = useState(true)


    useEffect(() => {
        fetch('https://assignment-11-server-candid-captures.vercel.app/allServices')
            .then(res => res.json())
            .then(data => {
                setServicesAll(data)
                setLoad(false)
            })
    }, [])

    if (load) {
        return <div className='lg:w-16 w-16  mx-auto  m-20'>
            <div className=" w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600"></div>
        </div>

    }

    return (
        <div className='p-2 lg:mx-20 mb-20'>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20'>
                {
                    servicesAll?.map(ser => <ServicesCart
                        key={ser._id}
                        ser={ser}

                    ></ServicesCart>)
                }

            </div>
        </div>
    );
};

export default AllServices;