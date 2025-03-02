import React from 'react'; ; // Import the custom CSS file for hover styles

const DecorativeLighting = () => {
  const categories = [
    {
      name: "Garden Light",
      imgSrc: "https://www.whiteteak.com/media/customimages/homepage/HD%20sub%20categories/HD_trays.jpg ",
      hoverImgSrc: "main/category/GLANZA TALL/25W GLANZA TALL WITH ELLIPSES RING.jpeg", // Hover image
    },
    {
      name: "GLANZA SERIES",
      imgSrc: "main/category/GLANZA TALL/25W GLANZA TALL WITH ELLIPSES RING.jpeg",
      hoverImgSrc: "main/garden.png",
    },
    {
      name: "DOME SERIES",
      imgSrc: "main/category/HD IMAGES 24/DOME SERIES/12W DOME CONCEALED/12W DOME CONCEALED BLACK HOLE.png",
      hoverImgSrc: "https://via.placeholder.com/100/00FF00",
    },
    {
      name: "COB SPOTLIGHT",
      imgSrc: "main/category/╗¡░σ 1 ┐╜▒┤ 6-7.jpg",
      hoverImgSrc: "https://via.placeholder.com/100/FFFF00",
    },
    {
      name: "PULLOUT SERIES",
      imgSrc: "main/category/GIMBAL 30W.png",
      hoverImgSrc: "https://via.placeholder.com/100/FF00FF",
    },
    {
      name: "LASER BLADE SERIES",
      imgSrc: "main/category/MINI BLACK.jpeg",
      hoverImgSrc: "https://via.placeholder.com/100/00FFFF",
    },
  ];

  return (
    <div className="decorative-lighting-container">
      <h3 className="decorative-lighting-title">
        Shop Decorative Lighting, Home Decor & Designer Fans
      </h3>
      <div className="decorative-lighting-grid">
        {categories.map((category, index) => (
          <div

            key={index}
            className="decorative-lighting-card"
            style={{

              backgroundImage:`url(${category.imgSrc})`,
              objectFit:"contain"
            }}
            data-hover-image={category.hoverImgSrc} // Custom data attribute
          >
            <div className="decorative-lighting-text"> </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DecorativeLighting;
