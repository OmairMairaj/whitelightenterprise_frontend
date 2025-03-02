import React, { useState, useEffect } from "react";
import BackgroundAnimation from "../BackgroundAnimation";

const Slideshow: React.FC = () => {
  const slides = [
    {
      id: 1,
      title: "Peace Lily",
      category: "Indoor",
      price: "$36.00",
      bgColor: "bg-orange-500",
      priceTextColor: "text-orange-200",
      imgSrc:
        "main/category/HD IMAGES 24/DOME SERIES/DOME 3W - 30W/DOME 25-30W.png",
    },
    {
      id: 2,
      title: "Monstera",
      category: "Outdoor",
      price: "$45.00",
      bgColor: "bg-red-300",
      priceTextColor: "text-blue-200",
      imgSrc:
        "https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png",
    },
    {
      id: 3,
      title: "Oak Tree",
      category: "Outdoor",
      price: "$68.50",
      bgColor: "bg-orange-500",
      priceTextColor: "text-purple-500",
      imgSrc:
        "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
    },
    {
      id: 4,
      title: "Chandeliers",
      category: "Lighting",
      price: "$150.00",
      bgColor: "bg-yellow-500",
      priceTextColor: "text-yellow-500",
      imgSrc:
        "main/category/HD IMAGES 24/DOME SERIES/12W DOME SURFACE/12W DOME ROUND SURFACE  FISH EYE.png",
    },
    {
      id: 5,
      title: "Pendants",
      category: "Lighting",
      price: "$85.00",
      bgColor: "bg-brown-500",
      priceTextColor: "text-pink-500",
      imgSrc:
        "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    
    <div className="happy">
      <div className="relative w-full px-5 py-8">
        {/* Background Animation */}
        <BackgroundAnimation />
    <div className=" p-6"  > <BackgroundAnimation/>
      
      <div className="relative w-full max-w-6xl mx-auto z-7">
        {/* Heading */}
       
        <h1 className="text-center text-4xl font-bold mb-6 text-gray-800">
          
        </h1>

        {/* Caption */}
        <h2 className="text-left text-3xl font-bold mb-6 text-gray-700">
        
        </h2>

        {/* Slideshow Container */}
        <div className="flex overflow-hidden relative " >
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className={`flex-shrink-0 w-full flex items-center ${slide.bgColor} rounded-lg shadow-lg`}
                style={{ height: "600px " }}
              >
                {/* Image Container */}
                <div className="w-full h-full flex items-center justify-center">
                  <img
                
                    className="relative h-50"
                    src={slide.imgSrc}
                    alt={slide.title}
                  />
                </div>

                {/* Text Container */}
                <div className="w-1/2 text-white px-10">
                  <span className="block opacity-75 text-lg -mb-1">
                    {slide.category}
                  </span>
                  <h2 className="block font-semibold text-3xl mb-4">
                    {slide.title}
                  </h2>
                  {/* <span
                    className={`block bg-white rounded-full ${slide.priceTextColor} text-sm font-bold px-4 py-2 leading-none`}
                  >
                    {slide.price}
                  </span> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-600"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-600"
        >
          ❯
        </button>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Slideshow;
