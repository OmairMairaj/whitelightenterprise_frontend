// src/components/Review.tsx
import React from "react";
import OwlCarousel from "react-owl-carousel";
// Global CSS (Owl's) should be imported in main.tsx or App.tsx

const testimonialsData = [
  {
    id: "review-1",
    imgSrc: "/images/r.jpeg", // Updated image path
    name: "Ravi k.",
    project: "Corporate Office Project",
    description:
      "Stunning, energy-efficient LEDs for our office. Professional & hassle-free. Highly recommend WhiteLight!",
  },
  {
    id: "review-2",
    imgSrc: "/images/t.jpeg", // Updated image path
    name: "Trisha Patel",
    project: "Residential Lighting",
    description:
      "Our home's lighting is transformed! Elegant, efficient LEDs. Exceptional customer service. Extremely satisfied.",
  },
  {
    id: "review-3",
    imgSrc: "/images/a.jpeg", // Updated image path
    name: "Anil.",
    project: "Highway Lighting",
    description:
      "WhiteLight's LEDs greatly improved road safety. Excellent support and high-quality products! Thank you!",
  },
];

interface Testimonial {
  id: string;
  imgSrc: string;
  name: string;
  project: string;
  description: string;
}

interface ReviewItemProps {
  testimonial: Testimonial;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ testimonial }) => {
  const QUOTE_COLOR = "text-amber-400";

  return (
    // Reduced py on .item further
    <div className="item py-2 px-2 sm:px-4"> {/* Added horizontal padding control for item */}
      {/* Card: Increased max-width, reduced min-height, reduced padding, adjusted image */}
      <div className={`relative bg-white rounded-xl shadow-xl w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto p-4 pt-8 text-center min-h-[190px] sm:min-h-[200px] testimonial-card-unique border-t-4 border-amber-500 mt-4`}>
        {/* Image: Smaller, adjusted top positioning */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 z-10">
          <img
            src={testimonial.imgSrc}
            alt={testimonial.name}
            className="w-full h-full rounded-full object-cover border-2 sm:border-4 border-white shadow-md" // Slightly thinner border on smallest screens
          />
        </div>

        {/* Name/Project: Reduced margin-bottom */}
        <div className="mt-1 mb-2">
          <h3 className={`text-md sm:text-lg font-bold text-amber-600`}>{testimonial.name}</h3>
          <p className="text-xs text-neutral-500">{testimonial.project}</p>
        </div>

        <div className="relative text-neutral-700 text-xs sm:text-sm leading-normal sm:leading-relaxed">
          {/* Quotes: Smaller, adjusted positioning slightly */}
          <span className={`absolute -top-1 -left-0 text-4xl ${QUOTE_COLOR} opacity-40 font-serif select-none`}>“</span>
          <p
            className="px-2 sm:px-4" // Reduced horizontal padding for text
            key={testimonial.id}
          >
            {testimonial.description}
          </p>
          <span className={`absolute -bottom-2 -right-0 text-4xl ${QUOTE_COLOR} opacity-40 font-serif select-none`}>”</span>
        </div>
      </div>
    </div>
  );
};


const Review: React.FC = () => {
  const options = {
    items: 1,
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 600,
  };

  if (testimonialsData.length === 0) {
    return <div className="py-8 text-center text-neutral-500">No reviews available.</div>;
  }

  return (
    // Section: Significantly reduced vertical padding
    <div className="py-6 md:py-8 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-x-clip">
      <div className="container mx-auto px-4">
        {/* Title Section: Reduced margin-bottom */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-amber-700 mb-1 sm:mb-2">
            What Our Clients Say
          </h2>
          <p className="text-neutral-600 text-xs sm:text-sm md:text-base max-w-lg sm:max-w-xl mx-auto">
            Hear directly from those who've experienced the WhiteLight difference.
          </p>
        </div>

        {/* Carousel Container: Increased max-width significantly */}
        <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
          <OwlCarousel
            className="owl-theme"
            {...options}
            key={`owl-single-review-${testimonialsData.length}`}
          >
            {testimonialsData.map((testimonial) => (
              <ReviewItem
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Review;