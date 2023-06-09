import React from 'react';
import Banner from '../Banner/Banner';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import Classes from '../Classes/Classes';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Classes></Classes>
            <PopularInstructors></PopularInstructors>
            <h1>Home page</h1>
        </div>
    );
};

export default Home;