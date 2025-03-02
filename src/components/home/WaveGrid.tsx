import React from "react";

const trendingData = [
  {
    img: "/pictures/New folder/AQUA 7W TO 80W.jpeg",
    hoverImg: "/pictures/New folder/AQUA IP65.jpeg",
    title: "AQUA IP65 ",
    desc: " ",
  },
  {
    img: "/pictures/New folder/SPIKE SP10 SP20.jpeg",
    hoverImg: "/pictures/New folder/WhatsApp Image 2022-09-05 at 2.59.40 AM.jpeg",
    title: "SPIKE",
    desc: " ",
  },
  {
    img: "/pictures/New folder/WhatsApp Image 2024-02-14 at 4.19.30 AM.jpeg",
    hoverImg: "src/components/home//pictures/slider-banner/banner3.jpg",
    title: "mash fix",
    desc: "Short description for item 3",
  },
];

const WaveGrid = () => {
  return (
    <section id="trending" className="trending-section">
      <div>
        <div className="title-section">
          <h2 className="section-title text-2xl md:text-3xl lg:text-4xl font-bold text-center">Trending Now</h2>
        </div>

        <div className="flex flex-wrap gap-4">
          {trendingData.map((item, index) => (
            <div key={index}>
              <div className="relative overflow-hidden rounded-t-[50%] shadow">
                <img src={item.img} alt={item.title} className="w-full h-24 md:h-48 lg:h-64 object-cover" />
              </div>
              <div className="p-2 md:p-4 bg-white border shadow">
                <h2 className="text-sm md:text-lg lg:text-xl font-semibold text-center">{item.title}</h2>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default WaveGrid;
