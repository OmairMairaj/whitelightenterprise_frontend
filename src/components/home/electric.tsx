import React from "react";

const ElectricBulbShowcase: React.FC = () => {
  const cards = [
    {
      image:"main/New folder/AQUA 7W TO 80W.jpeg",
      description:
        "Illuminate your space with energy-efficient lighting, combining brightness with sustainability."
    },
    {
      image: "main/New folder/AQUA 7W TO 80W.jpeg",
      description:
        "Experience seamless control with our smart bulbs, designed for modern living."
    },
    {
      image: "https://www.example.com/images/eco-friendly-bulb.jpg",
      description:
        "Join the eco-friendly revolution with bulbs that save energy and the environment."
    },
    {
      image: "https://www.example.com/images/vintage-style-bulb.jpg",
      description:
        "Add a touch of elegance with vintage-style bulbs that blend nostalgia and innovation."
    },
    {
      image: "https://www.example.com/images/high-performance-bulb.jpg",
      description:
        "Discover high-performance lighting solutions for every need and every space."
    }
  ];

  return (
    <section className="flex flex-col lg:h-[100vh] justify-center items-center">

      <div className="flex flex-wrap mx-auto md:flex-nowrap mt-6 border-t pt-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative flex flex-col items-start m-1 transition ease-in-out duration-500 delay-150 transform md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0"
          >
            <article
              className="mx-auto rounded-3xl overflow-hidden bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative transform duration-500 group"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="relative h-full group-hover:bg-opacity-0 min-h-150 flex flex-wrap flex-col pt-[25rem] transform duration-500">
                <div className="group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col">
                  <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500">
                    {card.description}
                  </p>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ElectricBulbShowcase;
