import React from 'react';
import Services from '../../sheared/Services/Services';
import UseTitle from '../../UseTitle/UseTitle';
import ClientReview from '../ClientReview/ClientReview';
import Clients from '../Clients/Clients';
import Header from '../Header/Header';
import PopularPictures from '../PopularPictures/PopularPictures';

const Home = () => {
    UseTitle('home')
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <PopularPictures></PopularPictures>
            <Clients></Clients>
            <ClientReview></ClientReview>
        </div>
    );
};

export default Home;