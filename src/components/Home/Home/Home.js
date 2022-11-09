import React from 'react';
import Services from '../../sheared/Services/Services';
import Clients from '../Clients/Clients';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Clients></Clients>
            
        </div>
    );
};

export default Home;