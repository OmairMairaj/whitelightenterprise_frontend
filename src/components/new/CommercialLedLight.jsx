import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Link } from "react-router-dom"; // Uncomment if slides will link

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import config from "../../data/config"; // Not used in this static version
// import BackgroundAnimation from "../BackgroundAnimation"; // Not using BackgroundAnimation for this "fresh" look

// --- THEME COLORS for a Fresh Look ---
const THEME_SECTION_BG = "bg-slate-50"; // Very light, clean background
const THEME_HEADING_TEXT = "text-slate-700"; // Darker, clear heading
const THEME_CARD_BG = "bg-white";
const THEME_CARD_SHADOW = "shadow-lg hover:shadow-xl";
const THEME_PRODUCT_NAME_TEXT = "text-slate-600";
const THEME_PRODUCT_NAME_TEXT_HOVER = "hover:text-sky-600"; // A fresh accent color like sky blue
const ACCENT_COLOR_BORDER = "group-hover:border-sky-500"; // Accent for image border on hover
const ACCENT_COLOR_TEXT = "text-sky-600"; // For other accents if needed
// ---

const CommercialLedLight = () => {
    const [products] = useState([
        { name: 'Tiltable Track Light', image: '/images/TILTABLETRACKLIGHT.png' },
        { name: 'Tiltable Concealed Light', image: '/images/TiltableConcealedLight.png' },
        { name: 'IP65 Spot Light', image: '/images/IP65SPOTLIGHT.png' },
        { name: 'Tiltable Surface Light', image: '/images/TiltableSurfaceLight.png' },
        { name: '2022 Wall Light', image: '/images/wall-light.png' },
        { name: 'Garden Light', image: '/images/garden-light.png' },
        { name: 'Office Downlight', image: '/images/TILTABLETRACKLIGHT.png' }, // Placeholder
        { name: 'Retail Spotlight', image: '/images/TiltableConcealedLight.png' }, // Placeholder
    ]);
    // const [loading, setLoading] = useState(true); // Not used here
    // const [error, setError] = useState(false);   // Not used here
    // const navigate = useNavigate();             // Not used here

    const swiperArrowStyles = `
        .swiper-button-next, .swiper-button-prev {
            color: #0EA5E9; /* sky-500 */
            width: 34px;
            height: 34px;
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 50%;
            box-shadow: 0 2px 5px rgba(0,0,0,0.08);
            transition: all 0.2s ease-in-out;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
            background-color: #0EA5E9; /* sky-500 */
            color: white;
            transform: scale(1.05);
        }
        .swiper-button-next::after, .swiper-button-prev::after {
            font-size: 15px;
        }
        .swiper-pagination-bullet {
            background-color: #94A3B8; /* slate-400 */
            opacity: 0.5;
            transition: all 0.2s ease-in-out;
            width: 8px;
            height: 8px;
            margin: 0 4px !important;
        }
        .swiper-pagination-bullet-active {
            background-color: #0EA5E9; /* sky-500 */
            opacity: 1;
            transform: scale(1.2);
        }
    `;

    return (
        // Main section with a light, fresh background
        <div className={`w-full px-2 md:px-5 py-10 md:py-16 ${THEME_SECTION_BG} font-sans`}> {/* Removed overflow-y-hidden, added overflow-x-clip if needed later */}
            <style>{swiperArrowStyles}</style>
            
            <div className="section-header mb-8 md:mb-12 text-center">
                <h2 className={`text-3xl lg:text-4xl font-bold ${THEME_HEADING_TEXT} tracking-tight`}>
                    “Commercial Led Light”
                </h2>
                {/* Optional Subheading */}
                <p className="mt-2 text-sm text-slate-500 max-w-lg mx-auto">
                    Efficient and reliable lighting solutions for every commercial space.
                </p>
            </div>

            <div className="max-w-screen-xl mx-auto">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={15} // Default space between slides
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true} 
                    grabCursor={true}
                    breakpoints={{ // Using your original breakpoints, adjust if needed for visual balance
                        320: { slidesPerView: 2, spaceBetween: 10 }, // More slides for smaller items
                        640: { slidesPerView: 3, spaceBetween: 12 },
                        768: { slidesPerView: 4, spaceBetween: 15 },
                        1024: { slidesPerView: 5, spaceBetween: 15 },
                        1280: { slidesPerView: 5, spaceBetween: 18 },
                    }}
                    className="!pb-12 md:!pb-14" // Padding for pagination
                >
                    {products.map((product, index) => (
                        <SwiperSlide
                            key={index}
                            className="flex flex-col items-center group cursor-pointer p-2 h-full" // Added h-full for consistent slide height if items vary
                        >
                            {/* Card with a fresh, clean style */}
                            <div className={`flex flex-col items-center w-full h-full
                                            ${THEME_CARD_BG} rounded-xl ${THEME_CARD_SHADOW} 
                                            p-3 sm:p-4 
                                            transition-all duration-300 ease-in-out border border-transparent ${ACCENT_COLOR_BORDER}
                                            transform group-hover:scale-[1.02] group-hover:-translate-y-1`}
                            >
                                {/* Circular Image Container (as per your original structure) */}
                                <div className={`relative rounded-full overflow-hidden 
                                                w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 // YOUR ORIGINAL SIZES
                                                mx-auto mb-3 
                                                border-2 border-slate-200 group-hover:border-sky-400 // Accent border on hover
                                                shadow-sm group-hover:shadow-md transition-all duration-300 ease-in-out`}
                                >
                                    <img
                                        src={product.image || '/images/placeholder-default.png'} // Have a default placeholder
                                        alt={product.name}
                                        className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                                    />
                                </div>
                                {/* Product Name */}
                                <div className={`font-semibold text-xs sm:text-sm text-center ${THEME_PRODUCT_NAME_TEXT} ${THEME_PRODUCT_NAME_TEXT_HOVER} transition-colors duration-200 mt-auto pt-2 w-full truncate`}>
                                    {/* mt-auto pushes name to bottom if card has extra space, pt-2 for spacing */}
                                    {product.name}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CommercialLedLight;