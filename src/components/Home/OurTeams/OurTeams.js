import React from 'react';
import pic1 from '../../../assets/pic1.jpg'
import pic2 from '../../../assets/pic2.jpg'
import pic3 from '../../../assets/pic3.jpg'
import pic4 from '../../../assets/pic4.jpg'
import pic5 from '../../../assets/pic5.jpg'
import pic6 from '../../../assets/pic6.jpg'


const OurTeams = () => {
    return (
        <section class="m-2 lg:mx-16 my-20 bg-white dark:bg-gray-900">
    <div class="h-[32rem]  dark:bg-gray-800">
        <div class="container px-6 py-10 mx-auto">
            <p class="max-w-2xl mx-auto mt-6 text-center text-gray-900 dark:text-gray-300">
            Our Team
            </p>

            <div class="flex justify-center mx-auto mt-6">
                <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
            </div>
            
            <h1 class="text-3xl mt-6 font-semibold text-center text-orange-500 capitalize lg:text-4xl dark:text-white">Professional Photographers</h1>
        </div>
    </div>

    <div class="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div class="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700 hover:bg-gray-200">
                <img class="object-cover w-full rounded-xl aspect-square" src={pic1} alt=""/>

                <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">arthur melo</h1>
                <p class="mt-2 text-blue-600 capitalize dark:text-gray-300">PHOTOGRAPHER</p>
            </div>

            <div class="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700 hover:bg-gray-200">
                <img class="object-cover w-full rounded-xl aspect-square" src={pic2} alt=""/>

                <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Pamela Anderson</h1>
                <p class="mt-2 text-blue-600 capitalize dark:text-gray-300">PHOTOGRAPHER</p>
            </div>

            <div class="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700 hover:bg-gray-200">
                <img class="object-cover w-full rounded-xl aspect-square" src={pic3} alt=""/>
                <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Alexandra Dane</h1>
                <p class="mt-2 text-blue-600 capitalize dark:text-gray-300">PHOTOGRAPHER</p>
            </div>
            <div class="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700 hover:bg-gray-200">
                <img class="object-cover w-full rounded-xl aspect-square" src={pic4} alt=""/>
                <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Jimmy Thomson</h1>
                <p class="mt-2 text-blue-600 capitalize dark:text-gray-300">PHOTOGRAPHER</p>
            </div>
            <div class="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700 hover:bg-gray-200">
                <img class="object-cover w-full rounded-xl aspect-square" src={pic5} alt=""/>
                <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Sabrina Janes</h1>
                <p class="mt-2 text-blue-600 capitalize dark:text-gray-300">PHOTOGRAPHER</p>
            </div>
            <div class="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700 hover:bg-gray-200">
                <img class="object-cover w-full rounded-xl aspect-square" src={pic6} alt=""/>
                <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">John Doe</h1>
                <p class="mt-2 text-blue-600 capitalize dark:text-gray-300">PHOTOGRAPHER</p>
            </div>
        </div>
    </div>
</section>
    );
};

export default OurTeams;