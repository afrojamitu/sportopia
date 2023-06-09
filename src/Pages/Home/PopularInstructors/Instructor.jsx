import React from 'react';

const Instructor = ({ sport }) => {
    const { instructor, image, totalClass, students, email } = sport;
    return (
        <div className='flex flex-col items-center rounded-lg border-2 pb-5 hover:scale-105' style={{ transition: '0.5s' }}
        >
            <img className='w-full h-48 rounded-t-lg' src={image} alt="" />
            <h1 className="text-2xl text-center text-green-800 font-semibold">{instructor}</h1>
            <p className="text-lg">Email: {email}</p>
            <p className="text-lg text-center">Total Classes: {totalClass}</p>
            <p className="text-lg text-center">Total Students: {students}</p>
        </div>
    );
};

export default Instructor;