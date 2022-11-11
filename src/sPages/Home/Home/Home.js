import React from 'react';
import Banner from '../Banner/Banner';
import AboutMe from './AboutMe/AboutMe';
import Services from './Services/Services';
import Wht from './Why/Wht';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Wht></Wht>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;