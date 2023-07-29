import React from 'react';

const Banner = () => {
    return (
        <div className='relative'>
            <img src="https://i.ibb.co/9pj1TGN/baylee-gramling-s08-AMj7-Eja-I-unsplash-2.jpg" alt="" />
            <div className='text-start text-white font-bold md:w-8/12 md:mx-auto mx-5 space-y-5 absolute top-[40%] left-52'>
                <h1 className="text-5xl text-start">Explore The Best Summer Camp In City</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium quod quisquam quas voluptatibus, nihil, enim dolore provident quaerat maiores aspernatur dolor illum cupiditate perferendis error inventore odio, consectetur ex commodi reprehenderit itaque beatae officiis tenetur iste accusamus.</p>
                <div>
                    <button className='bg-white px-3 py-2 rounded-lg text-black hover:bg-opacity-70' style={{transition: '.4s'}}>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;