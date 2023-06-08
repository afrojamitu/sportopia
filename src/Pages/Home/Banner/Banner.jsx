import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../../assets/slider/slider-1.png';
import slider2 from '../../../assets/slider/slider-2.png';
import slider3 from '../../../assets/slider/slider-3.png';
import slider4 from '../../../assets/slider/slider-4.png';
import slider5 from '../../../assets/slider/slider-5.png';
import slider6 from '../../../assets/slider/slider-6.png';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={slider1} />
            </div>
            <div>
                <img src={slider2} />
            </div>
            <div>
                <img src={slider3} />
            </div>
            <div>
                <img src={slider4} />
            </div>
            <div>
                <img src={slider5} />
            </div>
            <div>
                <img src={slider6} />
            </div>
        </Carousel>
    );
};

export default Banner;