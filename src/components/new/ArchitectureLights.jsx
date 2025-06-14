import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import BackgroundAnimation from "../BackgroundAnimation"; // Adjust path if necessary

// --- THEME COLORS ---
const THEME_SECTION_BG_FROM = "from-neutral-800";
const THEME_SECTION_BG_TO = "to-neutral-900";
const THEME_HEADING_TEXT = "text-amber-400";
const THEME_SUBHEADING_TEXT = "text-neutral-300";
const THEME_SLIDE_TEXT = "text-neutral-100";
const THEME_SLIDE_TEXT_HOVER = "hover:text-amber-300";
const THEME_SLIDE_IMAGE_BORDER = "border-neutral-700/50";
const THEME_SLIDE_IMAGE_BORDER_HOVER = "hover:border-amber-500/70";
const THEME_CARD_BG_HOVER_EFFECT = "hover:bg-neutral-700/20";
// ---

const ArchitectureLights = () => {
    const [products] = useState([
        { name: 'Swift', image: '/images/Swift.png' },
        { name: 'Sunflower', image: '/images/Sunflower.png' },
        { name: 'Pullout Single', image: '/images/PulloutSingle.png' },
        { name: 'Pullout Double', image: '/images/PulloutDouble.png' },
        { name: 'Beetle', image: '/images/Beetle.png' },
        { name: 'Tiltable Laser Blade', image: '/images/TiltableLaserBlade.png' },
        { name: 'Cylinder Up Down', image: '/images/Swift.png' },
        { name: 'Wall Washer', image: '/images/Sunflower.png' },
    ]);

    const swiperArrowStyles = `
        .swiper-button-next, .swiper-button-prev {
            color: #FBBF24; /* amber-400 */
            width: 32px; /* Adjusted arrow size */
            height: 32px;
            background-color: rgba(0, 0, 0, 0.4);
            border-radius: 8px; /* Rounded square for arrows */
            transition: all 0.2s ease;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
            background-color: rgba(0, 0, 0, 0.7);
            transform: scale(1.05);
        }
        .swiper-button-next::after, .swiper-button-prev::after {
            font-size: 14px;
        }
        .swiper-pagination-bullet {
            background-color: #A3A3A3; /* neutral-400 */
            opacity: 0.6;
            transition: all 0.2s ease;
            width: 8px;
            height: 8px;
            border-radius: 2px; /* Slightly squared dots */
            margin: 0 4px !important;
        }
        .swiper-pagination-bullet-active {
            background-color: #FBBF24; /* amber-400 */
            opacity: 1;
            transform: scale(1.2);
            width: 12px; /* Active dot slightly wider */
            border-radius: 3px;
        }
    `;

    return (
        // REDUCED PADDING: py-10 md:py-12 -> py-6 md:py-8
        <div className={`relative w-full px-2 md:px-4 py-6 md:py-8 bg-gradient-to-br ${THEME_SECTION_BG_FROM} ${THEME_SECTION_BG_TO} overflow-hidden font-sans`}>
            <style>{swiperArrowStyles}</style>

            <div className="absolute inset-0 z-0 opacity-60 md:opacity-70">
              <BackgroundAnimation />
            </div>

            {/* REDUCED MARGIN BOTTOM: mb-8 md:mb-10 -> mb-6 md:mb-8 */}
            <div className="section-header mb-6 md:mb-8 text-center relative z-10">
                <h2 className={`text-2xl lg:text-4xl font-extrabold ${THEME_HEADING_TEXT} tracking-tight drop-shadow-lg`}>
                    Architectural Lighting
                </h2>
                <p className={`mt-2 ${THEME_SUBHEADING_TEXT} text-xs md:text-base max-w-lg mx-auto drop-shadow-sm`}>
                    Illuminate your spaces with precision and elegance.
                </p>
            </div>

            <div className="relative z-10 max-w-screen-xl mx-auto">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={15}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    grabCursor={true}
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 10 },
                        640: { slidesPerView: 3, spaceBetween: 12 },
                        768: { slidesPerView: 3, spaceBetween: 15 },
                        1024: { slidesPerView: 4, spaceBetween: 18 },
                        1280: { slidesPerView: 4, spaceBetween: 20 },
                    }}
                    // REDUCED PADDING BOTTOM FOR PAGINATION: !pb-10 md:!pb-12 -> !pb-8 md:!pb-10
                    className="!pb-8 md:!pb-10"
                >
                    {products.map((product, index) => (
                        <SwiperSlide
                            key={index}
                            className={`flex flex-col items-center group cursor-pointer p-2 rounded-lg
                                        transition-all duration-300 ease-in-out transform hover:-translate-y-1.5
                                        ${THEME_CARD_BG_HOVER_EFFECT}`}
                        >
                            {/* REDUCED IMAGE CONTAINER SIZES */}
                            <div className={`relative rounded-xl overflow-hidden
                                            w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44
                                            mx-auto mb-2 md:mb-3 {/* REDUCED MARGIN BOTTOM */}
                                            border-2 ${THEME_SLIDE_IMAGE_BORDER} group-hover:${THEME_SLIDE_IMAGE_BORDER_HOVER}
                                            shadow-lg group-hover:shadow-xl transition-all duration-300 ease-in-out
                                            bg-neutral-700/20 group-hover:bg-neutral-700/40`}
                            >
                                <img
                                    src={product.image || '/images/placeholder-light.png'}
                                    alt={product.name}
                                    className="h-full w-full object-cover transition-transform duration-400 ease-in-out transform group-hover:scale-105"
                                />
                            </div>
                            {/* Product Name - Font size can also be adjusted if needed, but keeping as is for now */}
                            <div className={`font-semibold text-xs sm:text-sm md:text-base text-center ${THEME_SLIDE_TEXT} ${THEME_SLIDE_TEXT_HOVER} transition-colors duration-200 group-hover:font-bold mt-1 w-full px-1 truncate`}> {/* Adjusted font size slightly */}
                                {product.name}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ArchitectureLights;