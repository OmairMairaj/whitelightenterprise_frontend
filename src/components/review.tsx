// src/components/Review.tsx
import React from "react";
import OwlCarousel from "react-owl-carousel";
// Global CSS (Owl's) should be imported in main.tsx or App.tsx
// Your animation.css (if it only had typing) might not be needed or only needs dot/Owl fixes now.

const testimonialsData = [
  {
    id: "review-1",
    imgSrc: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=120&h=120&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Ravi K.",
    project: "Corporate Office Project",
    description:
      "Stunning, energy-efficient LEDs for our office. Professional & hassle-free. Highly recommend WhiteLight!",
  },
  {
    id: "review-2",
    imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Priya Patel",
    project: "Residential Lighting",
    description:
      "Our home's lighting is transformed! Elegant, efficient LEDs. Exceptional customer service. Extremely satisfied.",
  },
  {
    id: "review-3",
    imgSrc: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Anil S.",
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
    <div className="item py-12 px-4"> 
      <div className={`relative bg-white rounded-xl shadow-xl max-w-md mx-auto p-6 pt-12 text-center min-h-[280px] sm:min-h-[300px] testimonial-card-unique border-t-4 border-amber-500`}>
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 z-10">
          <img
            src={testimonial.imgSrc}
            alt={testimonial.name}
            className="w-full h-full rounded-full object-cover border-4 border-white shadow-md"
          />
        </div>
        
        <div className="mt-1 mb-4">
          <h3 className={`text-lg font-bold text-amber-600`}>{testimonial.name}</h3>
          <p className="text-xs text-neutral-500">{testimonial.project}</p>
        </div>

        <div className="relative text-neutral-700 text-sm leading-relaxed">
          <span className={`absolute -top-2 -left-1 text-6xl ${QUOTE_COLOR} opacity-50 font-serif select-none`}>“</span>
          {/* REMOVED testimonial-text-typing class, text will now appear normally */}
          <p 
            className="px-4 sm:px-6" // Only basic padding
            key={testimonial.id} // Key is still good for React list updates
          >
            {testimonial.description}
          </p>
          <span className={`absolute -bottom-4 -right-1 text-6xl ${QUOTE_COLOR} opacity-50 font-serif select-none`}>”</span>
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
    autoplayTimeout: 5000, // Can be shorter now as text appears instantly
    autoplayHoverPause: true,
    smartSpeed: 600, 
  };

  if (testimonialsData.length === 0) {
    return <div className="py-10 text-center text-neutral-500">No reviews available.</div>;
  }

  return (
    <div className="py-12 md:py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-x-clip">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-700 mb-2">
            What Our Clients Say
          </h2>
          <p className="text-neutral-600 text-sm md:text-base max-w-xl mx-auto">
            Hear directly from those who've experienced the WhiteLight difference.
          </p>
        </div>
        
        <div className="w-full max-w-md sm:max-w-lg mx-auto"> 
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