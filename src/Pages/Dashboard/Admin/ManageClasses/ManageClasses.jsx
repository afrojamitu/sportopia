import React from 'react';
import { Helmet } from 'react-helmet';

const ManageClasses = () => {
    return (
        <div>
            <Helmet>
                <title>Manage Classes - Sportopia Admin</title>
            </Helmet>
            <h1 className='text-3xl font-semibold text-gray-800 pb-5'>Manage All Classes</h1>
        </div>
    );
};

export default ManageClasses;