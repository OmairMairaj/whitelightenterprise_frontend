import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import BackgroundAnimation from "../BackgroundAnimation";

const ArchitectureLights = () => {
    const [products, setProducts] = useState([
        {
            name: 'Swift',
            image: '/images/Swift.png',
            hoverImage: '/images/Swift.png',
            url: ''

        },
        {
            name: 'Sunflower',
            image: '/images/Sunflower.png',
            hoverImage: '/images/Sunflower.png',
            url: ''

        },
        {
            name: 'Pullout Single',
            image: '/images/PulloutSingle.png',
            hoverImage: '/images/PulloutSingle.png',
            url: ''

        },
        
        {
            name: 'Pullout Double',
            image: '/images/PulloutDouble.png',
            hoverImage: '/images/PulloutDouble.png',
            url: ''

        },
        {
            name: 'Beetle',
            image: '/images/Beetle.png',
            hoverImage: '/images/Beetle.png',
            url: ''

        }, 
        {
            name: 'Tiltable Laser Blade',
            image: '/images/TiltableLaserBlade.png',
            hoverImage: '/images/TiltableLaserBlade.png',
            url: ''

        },
       
       
        
    ]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    return (
        <div>
            <div className="relative w-full px-0 md:px-5 py-8 overflow-y-hidden">
                {/* Background Animation */}
                <BackgroundAnimation />
                <div className="section-header mb-8 text-center relative z-10">
                    <h2
                        className="text-xl lg:text-4xl font-bold"
                        style={{ color: "rgba(255, 255, 255, 0.97)" }}
                    >
                        "Architectural Light"
                    </h2>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={10}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000, 
                        disableOnInteraction: false, 
                    }}
                    loop={true} 
                    breakpoints={{
                        320: {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        },
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 5,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                    }}
                >
                    {products.map((category, index) => (
                        <SwiperSlide
                            key={index}
                            className="flex flex-col items-center justify-between cursor-pointer bg-white rounded p-2"
                        >
                            <div className="rounded- relative scale-110 mt-1">
                                <div className="rounded-full overflow-hidden mx-auto w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                            <div className="mt-4 font-bold text-sm lg:text-lg text-center">{category.name}</div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ArchitectureLights;
