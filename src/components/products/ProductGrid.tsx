import React from "react";
import { Link } from "react-router-dom";
import { products1 } from "../../data/products";
import BackgroundAnimation from "../BackgroundAnimation"; 

const ProductGrid: React.FC = () => {
  return (
    <div className="happy">
      <div className="relative w-full px-5 py-8 overflow-y-hidden">
        {/* Background Animation */}
        <BackgroundAnimation />
        <div className="section-header mb-8 text-center relative z-10">
          <h2
            className="text-4xl font-bold"
            style={{ color: "rgba(255, 255, 255, 0.97)" }}
          >
            " Architecural Light"
          </h2>
        </div>

        <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10 ">
          {products1.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              // className="trending-items"
              className="relative bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-2xl transition-shadow duration-300"

            >
              <div className="object-cover rounded- relativ scale-110">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 w-full rounded-4xl object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                  style={{ objectFit: "cover" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.src = product.hoverImage)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.src = product.image)
                  }
                />
                <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-6 group-hover:opacity-50 opacity-70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </p>
              </div>
              
             
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
