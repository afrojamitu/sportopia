import React from 'react';
import { Helmet } from 'react-helmet';

const EnrolledStudent = () => {
    return (
        <div>
            <Helmet>
                <title>Enrolled Student - Sportopia Instructor</title>
            </Helmet>
            <h1 className='text-3xl font-semibold'>Enrolled Students</h1>
        </div>
    );
};

export default EnrolledStudent;