import React from 'react';
import useClass from '../../hooks/useClass';
import Cover from '../../Shared/Cover/Cover';
import coverbg from '../../assets/cover1.png'
import ClassCard from './classCard';

const AllClasses = () => {
    const [classes] = useClass()
    return (
        <div>
            <Cover
                image={coverbg} title={'Our Best Courses Here'} subTitle={'Choose Any Class To Spend This Summer vacation With Us!'}
            ></Cover>
            <div className='md:w-10/12 md:mx-auto mx-5 my-10'>
                <h1 className='text-5xl font-semibold text-slate-800 pb-4 text-center'>Our All Classes</h1>
                <p className='text-center w-2/3 mx-auto'>Dedicated teacher with over a decade of experience in the education field. They believes in the power of personalized education, tailoring her lessons to meet the unique needs of each learner.</p>

                <div className='grid md:grid-cols-3 gap-3 md:gap-10 justify-center items-center my-8'>
                    {
                        classes.map(item => <ClassCard key={item._id} item={item}></ClassCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllClasses;