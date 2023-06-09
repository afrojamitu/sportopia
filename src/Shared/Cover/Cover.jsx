import React from 'react';

const Cover = ({image, title, subTitle}) => {
    return (
        <div className="py-20" style={{ backgroundImage: `url("${image}")` , backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'çover'}}>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="w-[800px] h-[200px] flex flex-col justify-center">
                <h1 className="mb-4 text-green-700 text-5xl font-bold uppercase">{title}</h1>
                <p className='text-black text-lg'>---{subTitle}---</p>
            </div>
        </div>
    </div>
    );
};

export default Cover;