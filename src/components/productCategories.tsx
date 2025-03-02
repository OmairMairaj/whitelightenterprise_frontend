import React, { useState } from "react";
import "../styles/product.css";
import fisheye from "../../pictures/category/fisheye.png"
import blackHole from "../../pictures/category/blackHole.png"
import garden from "../../pictures/garden.png"

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  backgroundColor: string;
}

const products: Product[] = [
  {
    id: 3,
    name: "12W DOME",
    category: "Dome",
    price: "$36.00",
    image:
    fisheye,
    backgroundColor: "bg-blue-900",
  },
  {
    id: 2,
    name: "12W DOME ROUND SURFACE",
    category: "DOME SERIES",
    price: "$45.00",
    image:
    blackHole,
    backgroundColor: "bg-red-900",
  },
  {
    id: 1,
    name: "Garden Light",
    category: "Garden Light",
    price: "$68.50",
    image:
      garden,
    backgroundColor: "bg-orange-500",
  },
  {
    id: 4,
    name: " ",
    category: "",
    price: "$68.50",
    image:
    fisheye,
    backgroundColor: "bg-orange-900",
  },
];

const ProductSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const currentProduct = products[currentIndex];

  return (
    <div className="slideshow-container flex flex-col lg:flex-row items-center justify-between lg:space-x-8 p-4 lg:p-8">
      {/* Product Card */}
      <div className="relative rounded-lg overflow-hidden shadow-lg bg-white max-w-sm lg:max-w-md w-full">
        <div className={`absolute inset-0 ${currentProduct.backgroundColor}`}>
          <svg
            className="absolute bottom-0 left-0 w-full h-full scale-150 opacity-10"
            viewBox="0 0 375 283"
            fill="none"
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
        </div>
        <div className="relative p-6 flex items-center justify-center">
          <img
            src={currentProduct.image}
            alt={currentProduct.name}
            className="max-h-48 w-auto object-contain"
          />
        </div>
        <div className="p-4 bg-gray-800 text-white">
          <p className="text-sm opacity-75">{currentProduct.category}</p><br/>
          <h2 className="text-lg font-semibold">{currentProduct.name}</h2>
        </div>
        <div className="absolute top-1/2 left-2 -translate-y-1/2">
          <button
            onClick={handlePrev}
            className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
          >
            ←
          </button>
        </div>
        <div className="absolute top-1/2 right-2 -translate-y-1/2">
          <button
            onClick={handleNext}
            className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
          >
            →
          </button>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="bg-gray-900 text-white flex-grow p-6 rounded-lg text-center lg:text-left mt-2">
        <h1 className="text-3xl font-bold mb-4">
        Exclusive<span className="text-yellow-400">'s </span>
        </h1>
        <p className="text-xl">{currentProduct.category}</p>
        <span className="text-orange-500">
        <p className="mt-2">{currentProduct.name}</p>
        </span>
         
      </div>
    </div>
  );
};

export default ProductSlideshow;
