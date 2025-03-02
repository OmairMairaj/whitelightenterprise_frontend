import { useNavigate } from "react-router-dom";
import commercial from "../../../pictures/comerical.png";
import panneldown from "../../../pictures/panneldown.png";
import arti from "../../../pictures/arti.png";
import Categories_chandeliers_2 from "../../../pictures/Categories_chandeliers_2.png";
import pannel from "../../../pictures/pannel.png";
import garden from "../../../pictures/garden.png";
import highbay from "../../../pictures/highbay.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const IconSlider = () => {
  const icons = [
    { name: "Commercial Lights", image: commercial },
    { name: "Panel Down Light", image: panneldown },
    { name: "Architectural Light", image: arti },
    { name: "Cylinder Light", image: Categories_chandeliers_2 },
    { name: "Panel Light", image: pannel },
    { name: "Garden Lights", image: garden },
    { name: "High-bay Light", image: highbay },
  ];

  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    const category = icons.find((cat) => cat.name === categoryName); // Find category based on name
    if (category) {
      navigate(`/category/${categoryName}`, { state: { category } }); // Pass the category data in the state
    }
  };

  return (
    <div className="px-2 sm:px-2 lg:px-16">
      <div className="text-center text-2xl font-bold mt-8 mb-8">Categories</div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {icons.map((icon, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center justify-between cursor-pointer border rounded p-2" onClick={() => handleCategoryClick(icon.name)}>
            <div className="w-full h-48 flex items-center justify-center">
              <img
                src={icon.image}
                alt={icon.name}
                className="object-contain w-full h-full"
              />
            </div>
            <p className="text-center text-sm sm:text-base lg:text-xl font-semibold">{icon.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IconSlider;
