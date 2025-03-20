import React, { useState } from 'react';
import BroweImage1 from './../../../assets/images/app-browsing-1.png';
import BroweImage2 from './../../../assets/images/app-browsing-2.png';
import BroweImage3 from './../../../assets/images/app-browsing-3.png';
import BroweImage4 from './../../../assets/images/hero-section-image.png';

const BrowsingSection = () => {
    const images = [
        { image: BroweImage1, desc: "" },
        { image: BroweImage2, desc: "" },
        { image: BroweImage3, desc: "" },
        { image: BroweImage4, desc: "" }
    ];

    const [mainImage, setMainImage] = useState(images[0].image);
    const [selectedIndex, setSelectedIndex] = useState(0); // حالة لتتبع الفهرس المحدد

    const handleImageClick = (imageSrc, index) => {
        setMainImage(imageSrc);
        setSelectedIndex(index); // تحديث الفهرس المحدد
    };

    return (
        <div className="flex justify-center items-center gap-10 p-10 flex-wrap bg-white">
            <h1 className='text-center text-2xl w-full'>استعرض التطبيق قبل التحميل</h1>

            <img src={mainImage} alt="Main" className="main-image min-w-50 max-w-sm shadow-2xl rounded-xl border" />

            <div className="items w-80 flex justify-evenly flex-wrap item-center gap-3">
                {
                    images.map((item, index) =>
                        <img
                            key={index}
                            src={item.image}
                            className={`w-33 shadow-2xl rounded-xl cursor-pointer border ${selectedIndex === index ? 'border-black-500 border-4' : ''}`} // تطبيق نمط مختلف
                            alt={item.desc}
                            onClick={() => handleImageClick(item.image, index)} // تمرير الفهرس
                        />
                    )
                }
            </div>
        </div>
    );
};

export default BrowsingSection;