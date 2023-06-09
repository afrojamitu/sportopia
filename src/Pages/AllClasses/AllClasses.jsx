import React from 'react';
import useClass from '../../hooks/useClass';
import { Rating } from '@smastrom/react-rating';

const AllClasses = () => {
    const [classes] = useClass()
    return (
        <div className='md:w-10/12 md:mx-auto mx-5 my-10'>
            <h1 className='text-5xl font-semibold text-green-700 pb-4 text-center'>Our All Classes</h1>
            <p className='text-center w-2/3 mx-auto'>Dedicated teacher with over a decade of experience in the education field. They believes in the power of personalized education, tailoring her lessons to meet the unique needs of each learner.</p>

            <div className='grid md:grid-cols-3 gap-3 md:gap-10 justify-center items-center my-8'>
                {
                    classes.map(sport => <>
                        <div className='flex flex-col items-center rounded-lg border-2 pb-5 hover:scale-105' style={{ transition: '0.5s' }}
                        >
                            <img className='w-full h-48 rounded-t-lg' src={sport.banner} alt="" />
                            <div className='p-3'>
                                <h1 className="text-2xl text-green-800 font-semibold">{sport.class}</h1>
                                <p className="text-lg">Instructor: {sport.instructor}</p>
                                <p className="text-lg">Total Students: {sport.students}</p>
                                <p className="text-lg">Total Seats: {sport.seats}</p>
                                <p className="text-lg flex gap-3 items-center">
                                    <Rating
                                        style={{ maxWidth: 110 }}
                                        readOnly
                                        orientation="Horizontal"
                                        value={sport.rating}
                                    />
                                    {sport.rating}</p>
                                <button className="px-3 py-1 mt-5 rounded bg-green-700 hover:opacity-70 font-semibold text-lg text-white" style={{ transition: '.5s' }}>Select</button>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default AllClasses;