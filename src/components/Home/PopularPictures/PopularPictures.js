import React from 'react';

const PopularPictures = () => {
    return (
        <div className='p-2 mb-20 lg:mx-20'>
            <h5 className="my-16 text-center text-3xl font-bold tracking-tight  text-orange-500">Popular Pictures</h5>

            <section className="py-6 rounded-xl bg-gray-800 text-gray-50">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                        {/* wedding  */}
                    <img src="https://i.ibb.co/PTtXcvb/wedding-5899236-340.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square" />
                        {/* sports  */}
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/6YTyfPD/audience-1866738-340.jpg" />
                        {/* journalism  */}
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/gP4tT2D/amateur-1239387-340.jpg" />
                        {/* foods  */}
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/fSSNmmY/strawberries-3431122-340.jpg" />
                        {/* wildlife  */}
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/6BpmXmq/deer-1367217-340.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/RHq94QQ/reptile-2042906-340.jpg" />
                        {/* fashion  */}
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/GR8fsDt/stylish-boy-2988896-340.jpg" />

                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/SNQq9MR/couple-443600-340.jpg" />
                    {/* event  */}
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/MpJTrfr/concert-2527495-340.jpg" />
                        {/* event  */}
                    <img src="https://i.ibb.co/7GYqz8p/beach-1854076-340.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square" />
                </div>
            </section>

        </div>
    );
};

export default PopularPictures;