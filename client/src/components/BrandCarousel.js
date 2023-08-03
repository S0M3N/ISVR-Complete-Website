import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import logo1 from '../img/logos/logo1.png';
import logo2 from '../img/logos/logo2.png';
import logo3 from '../img/logos/logo3.jpg';
import logo4 from '../img/logos/logo4.jpg';
import logo5 from '../img/logos/logo5.png';
import logo6 from '../img/logos/logo6.png';
import logo7 from '../img/logos/logo7.png';
import logo8 from '../img/logos/logo8.jpg';

const logos = [logo1, logo2, logo5, logo6, logo7, logo8, logo3, logo4];

export default function BrandCarousel() {
    const sliderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef.current) {
                sliderRef.current.slickNext();
            }
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='container mx-auto h-[50vh] flex flex-col justify-center'>
            <div className='text-center text-2xl font-semibold'>In association with</div>
            <div className='brand-carousel'>
                <Slider
                    ref={sliderRef}
                    infinite
                    speed={500}
                    slidesToShow={5}
                    slidesToScroll={1}
                    arrows
                    responsive={[
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 4,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3,
                            },
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 2,
                            },
                        },
                    ]}
                >
                    {logos.map((logo, index) => (
                        <div key={index} className='brand-carousel__item'>
                            <img src={logo} className='w-full aspect-square p-2' alt={`logo-${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
