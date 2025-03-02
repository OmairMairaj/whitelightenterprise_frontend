import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slider images
  const slides = [ '../../main/modern-decorative-lamps.jpg'
     
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer); // Cleanup timer
  }, [slides.length]);

  // Inline styles
  const sliderStyle: React.CSSProperties = {
    width: "100%",
    height: "300px",
    overflow: "hidden",
    position: "relative",
  };

  const slideStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transition: "opacity 0.5s ease-in-out",
    opacity: 0,
    zIndex: 0,
  };

  const activeSlideStyle: React.CSSProperties = {
    ...slideStyle,
    opacity: 1,
    zIndex: 1,
  };

  return (
    <section className="herobanner main-top" style={sliderStyle}>
      {slides.map((slides, index) => (
        <div
          key={index}
          style={index === currentIndex ? activeSlideStyle : slideStyle}
        >
          <img
            src={slides}
            alt={`Slides ${index + 1}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      ))}
    </section>
  );
};

const CarouselAndCategories: React.FC = () => {
  const categories = [
    {
      title: "PESTO LASER",
      imgSrc:
        "https://www.ankurlighting.com/cdn/shop/files/Wall_light_Desktop_61ae4eb1-d899-4dce-823d-f4b024d838f7.jpg?v=1734319596&width=5760",
      link: "/pestoproduct",
    },
    {
      title: "PESTO TRIMLESS",
      imgSrc:
        "https://www.ankurlighting.com/cdn/shop/files/Pendants_Desktop_b94a9102-3f4f-4110-9b6c-c993f9ffd11c.jpg?v=1734319452&width=5760",
      link: "#",
    },
    {
      title: "PESTO SURFACE",
      imgSrc:
        "https://www.ankurlighting.com/cdn/shop/files/Chandelier_Desktop_b7cfdffc-e6f3-4bcf-a3f9-a01f965677d6.jpg?v=1734319278&width=5760",
      link: "#",
    },
    {
      title: "PESTO MAGNETIC SERIES",
      imgSrc:
        "https://www.ankurlighting.com/cdn/shop/files/Floor_Lamp_Desktop_5782486a-fc9a-4281-8995-3ed72f337782.jpg?v=1734319388&width=5760",
      link: "#",
    },
  ];

  return (
    <div>
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Categories Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Categories</h2>
        <div className="row">
          {categories.map((category, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div className="card text-center border-0 shadow-sm">
                <img
                  src={category.imgSrc}
                className="h-80 w-72 object-cover rounded-t-xl transition-opacity duration-300 hover:opacity-0 bg-gray-300"
                  alt={category.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{category.title}</h5>
                  <a href={category.link} className="btn btn-outline-dark">
                    open
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselAndCategories;
