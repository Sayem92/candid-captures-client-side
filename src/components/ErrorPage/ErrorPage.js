import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ErrorPage = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut=()=>{
        logOut()
        .then(() => {
            toast.success('logout successfully')
            navigate('/')
          })
          .catch(err => console.log(err))
    };


    return (
        <section className="flex items-center h-full p-16 bg-sky-400 text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-red-600">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 text-black">But dont worry, you can find plenty of other things on our homepage.</p>
                    <button onClick={handleLogOut}
                 
                    className="px-8 py-3 font-semibold rounded bg-green-600 text-white">Back to homepage
               
                    </button>
                </div>
            </div>
        </section>

    );
};

export default ErrorPage;