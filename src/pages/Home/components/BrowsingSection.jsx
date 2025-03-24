// import React, { useState } from 'react';
import vihcle3 from './../../../assets/images/vihcle-3.jpg';
import vihcle5 from './../../../assets/images/vihcle-5.jpg';
import vihcle6 from './../../../assets/images/vihcle-6.jpg';
import vihcle7 from './../../../assets/images/vihcle-7.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const BrowsingSection = () => {
    const images = [
        { image: vihcle3, desc: "" },
        { image: vihcle5, desc: "" },
        { image: vihcle6, desc: "" },
        { image: vihcle7, desc: "" }
    ];

    return (
        <div className="flex justify-center items-center gap-10 p-10 flex-wrap bg-white">
            <h1 className='text-center text-2xl w-full'>خلال العمل - Work During</h1>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                breakpoints={{
                    0: {
                        slidesPerView: 'auto',
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 'auto',
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 'auto',
                        spaceBetween: 20,
                    },
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation
                pagination={{ clickable: true }}
            >
                {
                    images && images.map((image, index) =>
                        <>
                            <SwiperSlide className='w-70 cursor-grab active:cursor-grabbing' key={index}>
                                <img src={image.image} alt={image.desc} draggable="false" className='w-full rounded-xl' />
                            </SwiperSlide>
                        </>
                    )
                }
            </Swiper>

        </div>
    );
};

export default BrowsingSection;