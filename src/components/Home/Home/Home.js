import React from 'react';
import Services from '../../sheared/Services/Services';
import Clients from '../Clients/Clients';
import Header from '../Header/Header';
import PopularPictures from '../PopularPictures/PopularPictures';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <PopularPictures></PopularPictures>
            <Clients></Clients>
            
        </div>
    );
};

export default Home;