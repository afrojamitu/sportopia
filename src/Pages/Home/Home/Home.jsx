import React from 'react';
import Banner from '../Banner/Banner';
import PopularInstructors from '../PopularInstructors/PopularInstructors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularInstructors></PopularInstructors>
            <h1>Home page</h1>
        </div>
    );
};

export default Home;