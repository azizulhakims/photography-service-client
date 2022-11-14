import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import AboutMe from './AboutMe/AboutMe';
import Services from './Services/Services';
import Wht from './Why/Wht';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Services all={false}></Services>
            <Wht></Wht>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;