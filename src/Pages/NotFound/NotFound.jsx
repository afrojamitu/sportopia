import React from 'react';
import image from '../../assets/404.gif'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className=' bg-[#F0F0F0]'>
            <div className='h-[100vh] md:w-7/12 md:mx-auto relative' style={{ backgroundImage: `url("${image}")` , backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <Link to='/' className='px-5 py-2 bg-green-700 hover:opacity-80 rounded text-white font-bold text-lg absolute bottom-16 left-[350px]' style={{transition: '.5s'}}>Go Back</Link>
        </div>
        </div>
        
    );
};

export default NotFound;