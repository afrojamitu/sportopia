import React from 'react';

const Instagram = () => {
    return (
        <div className='md:w-10/12 md:mx-auto mx-5 mb-16'>
            <h1 className='text-5xl font-semibold text-green-700 pb-8 text-center'>Our Instagram Profile</h1>
            <div className='grid md:grid-cols-3 gap-5'>
                    <img className='w-full mt-8 h-52 rounded hover:opacity-80 hover:scale-105' src="https://i.ibb.co/Q6d0t7P/download.jpg" style={{transition: '.5s'}}/>

                    <img className='w-full h-52 rounded hover:opacity-80 hover:scale-105' src="https://i.ibb.co/KyWnxwW/images.jpg" style={{transition: '.5s'}}/>

                    <img className='w-full mt-8 h-52 rounded hover:opacity-80 hover:scale-105' src="https://i.ibb.co/FB3vZFx/images.jpg" style={{transition: '.5s'}}/>
                    
                    <img className='w-full h-52 mt-8 rounded hover:opacity-80 hover:scale-105' src="https://i.ibb.co/5n3jJF0/images.jpg" style={{transition: '.5s'}}/>

                    <img className='w-full h-52 rounded hover:opacity-80 hover:scale-105' src="https://i.ibb.co/w6SJNL4/images.jpg" style={{transition: '.5s'}}/>

                    <img className='w-full h-52 mt-8 rounded hover:opacity-80 hover:scale-105' src="https://i.ibb.co/G0R2vtw/images.jpg" style={{transition: '.5s'}}/>
                    
                    <img className='w-full h-52 mt-8 rounded hover:opacity-80 hover:scale-105' src="https://i.ibb.co/3kMztmH/images.jpg" style={{transition: '.5s'}}/>

                    <img className='w-full h-52 rounded hover:opacity-80 hover:scale-105' src="https://i.ibb.co/YXVrd8B/images.jpg" style={{transition: '.5s'}}/>

                    <img className='w-full h-52 mt-8 rounded hover:opacity-80 hover:scale-105' src="https://i.ibb.co/FKgd3Cz/images.jpg" style={{transition: '.5s'}}/>
            </div>
        </div>
    );
};

export default Instagram;