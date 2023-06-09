import React from 'react';
import Banner from '../Banner/Banner';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import Classes from '../Classes/Classes';
import Instagram from '../Instagram/Instagram';
import Reviews from '../Reviews/Reviews';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Sportopia Summer Camp</title>
            </Helmet>
            <Banner></Banner>
            <Classes></Classes>
            <PopularInstructors></PopularInstructors>
            <Reviews></Reviews>
            <Instagram></Instagram>
        </div>
    );
};

export default Home;