import React from 'react';

const Clients = () => {
    return (
        <div className='p-2 mb-20 lg:mx-20'>
             <h5 className="my-16 text-center text-3xl font-bold tracking-tight  text-orange-500">Clients I Served</h5>
             <div className='grid grid-cols-2 lg:grid-cols-5 gap-10'>

                <img className='w-56 h-32 border border-yellow-600 rounded-xl' src="https://i.ibb.co/x8rSwzk/download.png" alt="" />
                <img className='w-56 h-32 border border-yellow-600 rounded-xl' src="https://i.ibb.co/sWd4Ddj/discovery-channel-logo-21-D063-E22-D-seeklogo-com.jpg" alt="" />
                <img className='w-56 h-32 border border-yellow-600 rounded-xl' src="https://i.ibb.co/MM5xPd8/download-1.png" alt="" />
                <img className='w-56 h-32 border border-yellow-600 rounded-xl' src="https://i.ibb.co/CW7qyzh/images-1.jpg"  alt="" />
                <img className='w-56 h-32 border border-yellow-600 rounded-xl' src="https://i.ibb.co/68p7CBV/images.jpg" alt="" />
             </div>
        </div>
    );
};

export default Clients;