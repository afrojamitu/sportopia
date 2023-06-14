import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import './Review.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://sportopia-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='review-bg'>
            <div className='md:w-8/12 mx-auto my-16 p-20'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className='md:w-9/12 md:mx-auto mx-5 flex flex-col items-center text-center gap-4'>
                                <img className='w-16 my-2' src="https://i.ibb.co/kVnbvfB/images-removebg-preview-1.png" alt="" />
                                <Rating
                                    style={{ maxWidth: 150 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className='text-white text-center'>{review.details}</p>
                                <h3 className="text-2xl font-semibold text-orange-500">---{review.name}---</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;