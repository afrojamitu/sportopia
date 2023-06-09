import React from 'react';
import useSports from '../../../hooks/useSports';
import Instructor from './Instructor';

const PopularInstructors = () => {
    const [sports] = useSports()
    return (
        <div className='md:w-10/12 md:mx-auto mx-5 my-10'>
            <h1 className='text-5xl font-semibold text-green-700 pb-4 text-center'>Popular Instructors</h1>
            <p className='text-center w-2/3 mx-auto'>Dedicated teacher with over a decade of experience in the education field. They believes in the power of personalized education, tailoring her lessons to meet the unique needs of each learner.</p>

            <div className='grid md:grid-cols-3 gap-3 md:gap-10 justify-center items-center my-8'>
                {
                    sports.slice(0, 6).map(sport => <Instructor key={sport._id} sport={sport}></Instructor>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;