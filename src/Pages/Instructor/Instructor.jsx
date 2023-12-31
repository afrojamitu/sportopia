import React from 'react';
import useSports from '../../hooks/useSports';
import Cover from '../../Shared/Cover/Cover';
import coverbg from '../../assets/cover2.png'
import { Helmet } from 'react-helmet';

const Instructor = () => {
    const [sports] = useSports()
    return (
        <div>
            <Helmet>
                <title>All Instructors - Sportopia Summer Camp</title>
            </Helmet>
            <Cover
                image={coverbg} title={'Our Best All Instructors Here'} subTitle={'Dedicated teacher with over a decade of experience in the education field!'}
            ></Cover>
            <div className='md:w-10/12 md:mx-auto mx-5 my-10'>
                <h1 className='text-5xl font-semibold text-slate-800 pb-4 text-center'>Popular Instructors</h1>
                <p className='text-center w-2/3 mx-auto'>Dedicated teacher with over a decade of experience in the education field. They believes in the power of personalized education, tailoring her lessons to meet the unique needs of each learner.</p>

                <div className='grid md:grid-cols-3 gap-3 md:gap-10 justify-center items-center my-8'>
                    {
                        sports.map(sport => <>
                            <div className='flex flex-col items-center rounded-lg border-2 pb-5 hover:scale-105' style={{ transition: '0.5s' }}
                            >
                                <img className='w-full h-48 rounded-t-lg' src={sport.image} alt="" />
                                <h1 className="text-2xl text-center text-green-800 font-semibold">{sport.instructor}</h1>
                                <p className="text-lg">Email: {sport.email}</p>
                                <p className="text-lg text-center">Total Classes: {sport.totalClass}</p>
                                <p className="text-lg text-center">Total Students: {sport.students}</p>
                            </div>
                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructor;