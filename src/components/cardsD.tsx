import React, { useState } from "react";

const DecorativeLightingD = () => {
  const categories = [
    {
      name: "Garden Light",
      imgSrc: "/pictures/garden.png ",
      hoverImgSrc: " ", // Hover image
    },
    {
      name: "GLANZA SERIES",
      imgSrc: "/pictures/category/GLANZA TALL/25W GLANZA TALL WITH ELLIPSES RING.jpeg ",
      hoverImgSrc: "pictures/garden.png",
    },
    {
      name: "DOME SERIES",
      imgSrc: "/pictures/category/HD IMAGES 24/DOME SERIES/12W DOME CONCEALED/12W DOME CONCEALED BLACK HOLE.png",
      hoverImgSrc: "https://via.placeholder.com/100/00FF00",
    },
    {
      name: "COB SPOTLIGHT",
      imgSrc: "/pictures/category/╗¡░σ 1 ┐╜▒┤ 6-7.jpg",
      hoverImgSrc: "https://via.placeholder.com/100/FFFF00",
    },
    {
      name: "PULLOUT SERIES",
      imgSrc: "/pictures/category/GIMBAL 30W.png",
      hoverImgSrc: "https://via.placeholder.com/100/FF00FF",
    },
    {
      name: "LASER BLADE SERIES",
      imgSrc: "/pictures/category/MINI BLACK.jpeg",
      hoverImgSrc: "https://via.placeholder.com/100/00FFFF",
    },
  ];

  return (
    <div className="decorative-lighting-container p-6">
      <h3 className="decorative-lighting-title text-center text-2xl font-semibold mb-6">
        Shop Decorative Lighting, Home Decor & Designer Fans
      </h3>
      <div className="decorative-lighting-grid grid grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="decorative-lighting-card bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-40 rounded-t-lg overflow-hidden">
              <img
                src={category.imgSrc}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 hover:opacity-0"
              />
              <img
                src={category.hoverImgSrc}
                alt={`${category.name} Hover`}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 hover:opacity-100"
              />
            </div>
            <div className="decorative-lighting-text text-center text-gray-700 font-medium py-4 hover:text-blue-600 transition-colors duration-300">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DecorativeLightingD;
