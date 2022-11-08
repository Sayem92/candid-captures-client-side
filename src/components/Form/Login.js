import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../assets/Google.png'

const Login = () => {


    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;  
        console.log( email, password);

    }

    const handleGoogleLogin = () => {
       
    }

    return (
        <div className='p-2'>
             <div className='lg:mx-80 my-10 p-3 border lg:p-16 rounded-lg bg-slate-100'>
                <h1 className='text-3xl text-center font-bold text-yellow-400 mb-16'>Login</h1>
                <form onSubmit={handleSubmit}>
                    
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>

                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>

                </form>
                <p className='my-3'>Don't have an account? <Link to='/register' className='text-blue-500 underline'>Create an account</Link></p>

               <div className='mt-10'>
                <h1 className='text-center my-3'> -------------------OR----------------</h1>

                <div onClick={handleGoogleLogin} className='flex justify-between items-center rounded-2xl border border-gray-500 p-2 mb-3 lg:w-96 mx-auto'>
                    <img className='w-8 h-8' src={google} alt="" />
                    <p className='font-medium mr-5'>Continue with Google</p>
                </div>
               </div>
            </div>
        </div>
    );
};


                
export default Login;