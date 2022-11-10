import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading } = useContext(AuthContext);

    if(loading){
        return <div className='lg:w-16 w-16  mx-auto  m-20'>
        <div className=" w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600"></div>
       </div>
    }
  
    if(user){
        return children;
    }
    

};


export default PrivateRoutes;