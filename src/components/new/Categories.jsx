import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import config from "../../data/config";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const fetchCategories = async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await fetch(`${config.apiEndpoint}/open/category-list-all`, {
        method: "POST",  // Change to POST
        headers: {
          "Content-Type": "application/json",  // Make sure to set the correct header for POST requests
        },
        body: JSON.stringify({
          // Add any data you want to send in the request body (if required)
          // Example: categoryId: "some_id"
        }),
      });

      const data = await response.json();
      console.log(data, '====================================');

      if (data.status && data.categories) {
        setCategories(data.categories);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
      console.error("Error fetching categories:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    const category = categories.find((cat) => cat.catId === categoryId);
    if (category) {
      navigate(`/sub-categories/${categoryId}`, { state: { category } });
    }
  };

  return (
    <div className="px-2 sm:px-2 lg:px-16">
      <div className="text-center text-2xl font-bold mt-8 mb-8">Categories</div>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500">Failed to load categories. Please try again later.</div>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
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
          {categories.map((category) => (
            <SwiperSlide
              key={category._id}
              className="flex flex-col items-center justify-between cursor-pointer border rounded p-2"
              onClick={() => handleCategoryClick(category.catId)}
            >
              <div className="w-full h-48 flex items-center justify-center">
                <img
                  src={`${category.image}`}
                  alt={category.title}
                  className="object-contain w-full h-full"
                />
              </div>
              <p className="text-center text-sm sm:text-base lg:text-xl font-semibold">
                {category.title}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Categories;
