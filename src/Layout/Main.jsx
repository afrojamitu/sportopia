import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

const Main = () => {
    const location = useLocation()
    // console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup') 
    return (
        <div>
            {noHeaderFooter || <Header></Header>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;