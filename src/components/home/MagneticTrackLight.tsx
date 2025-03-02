import React from "react";

interface GridItem {
  img: string;
  alt: string;
}

const gridItems: GridItem[] = [
  { img: "/main/Magnet/6x2_double_tiltable_laser-transformed.png", alt: "Light 1" },
  { img: "/main/Magnet/GLANZA WALL WASHER BLACK.jpg", alt: "Light 2" },
  { img: "/main/Magnet/GUN METAL DEEP CONE.jpeg", alt: "Light 3" },
  { img: "/main/Magnet/JAZZ..jpeg", alt: "Light 4" },
];

const MagneticTrackLight: React.FC = () => {
  return (
    <section className="magnetic-track-light">
      <div className="container-m">
        <div className="magnetic-banner">
          <img
          width={"50px"}
            src="/pictures/special/Image 2024-02-14 at 4.19.42 AM (1).jpeg"
            alt="Magnetic Track Light"
            className="banner-image"
          />
          <div className="banner-text">
            {/* <h1>Magnetic Track Light</h1> */}
            {/* <button className="explore-button">Explore</button> */}
          </div>
        </div>

        <div className="grid-items">
          {gridItems.map((item, index) => (
            <div className="grid-item" key={index}>
              <img src={item.img} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MagneticTrackLight;
