import React, { useState, useEffect } from "react";

const SlideC: React.FC = () => {
  const slides = [
    {
      id: 1,
      title: "Peace Lily",
      category: "Indoor",
      price: "$36.00",
      bgColor: "bg-orange-500",
      priceTextColor: "text-orange-500",
      imgSrc:
        "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
    },
    {
      id: 2,
      title: "Monstera",
      category: "Outdoor",
      price: "$45.00",
      bgColor: "bg-teal-500",
      priceTextColor: "text-teal-500",
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
      bgColor: "bg-purple-500",
      priceTextColor: "text-yellow-500",
      imgSrc:
        "https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png",
    },
    {
      id: 5,
      title: "Pendants",
      category: "Lighting",
      price: "$85.00",
      bgColor: "bg-blue-500",
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
    <div className="bg-[#fff] p-6">
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Caption */}
      <h2 className="text-center text-3xl font-bold mb-6 text-gray-700 text-right">
     Candeliers
      </h2>

      {/* Slideshow Container */}
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`flex-shrink-0 w-full relative overflow-hidden ${slide.bgColor} rounded-lg shadow-lg`}
            >
              <div className="relative pt-10 px-10 flex items-center justify-center">
                <div
                  className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                  style={{
                    background: "radial-gradient(black, transparent 60%)",
                    transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                    opacity: 0.2,
                  }}
                />
                <img
                  className="relative w-40"
                  src={slide.imgSrc}
                  alt={slide.title}
                />
              </div>
              <div className="relative text-white px-6 pb-6 mt-6">
                <span className="block opacity-75 -mb-1">{slide.category}</span>
                <div className="flex justify-between">
                  <span className="block font-semibold text-xl">
                    {slide.title}
                  </span>
                  <span
                    className={`block bg-white rounded-full ${slide.priceTextColor} text-xs font-bold px-3 py-2 leading-none flex items-center`}
                  >
                    {slide.price}
                  </span>
                </div>
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
  );
};

export default SlideC;
