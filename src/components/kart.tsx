import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import emailjs from "@emailjs/browser";

const Kart = () => {
  const { id } = useParams();
  const [email, setEmail] = useState("");
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [message, setMessage] = useState("");
  const [image, setMainImage] = useState(""); // State for the main image

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  // Set initial main image on component mount
  useEffect(() => {
    setMainImage(product.image);
  }, [product]);

  const handleBuyNow = () => {
    setShowEmailForm(true);
  };

  const handleSubmitEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          to_email: email,
          product_name: product.name,
          product_link: window.location.href,
          price: product.price,
        },
        "YOUR_PUBLIC_KEY"
      );

      setMessage("Purchase link has been sent to your email!");
      setShowEmailForm(false);
    } catch (error) {
      setMessage("Failed to send email. Please try again.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <img
            src={ image} // Display the current main image
            alt={product.name}
            className="w-full rounded-lg shadow-md"
          />
          <div className="grid grid-cols-4 gap-2">
            {product.additionalImages?.map((additionalImages, index) => (
              <img
                key={index}
                src={additionalImages}
                alt={`${product.name} view ${index + 1}`}
                className="w-full h-24 object-cover rounded-md cursor-pointer"
                onMouseEnter={() => setMainImage(additionalImages)} // Update main image on hover
                onMouseLeave={() => setMainImage(product.image)} // Reset to the original image
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
            {product.discount && (
              <span className="text-lg text-green-600">-{product.discount}% off</span>
            )}
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600">{product.description}</p>
          </div>

          {/* Additional Details */}
          {product.specifications && (
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-800">Specifications</h2>
              <ul className="list-disc pl-5 text-gray-600">
                {product.specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
          )}

          {product.reviews && (
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-800">Customer Reviews</h2>
              {product.reviews.map((review, index) => (
                <div key={index} className="p-4 bg-gray-100 rounded-md">
                  <p className="font-semibold text-gray-800">{review.author}</p>
                  <p className="text-gray-600">{review.comment}</p>
                  <p className="text-yellow-500">Rating: {review.rating}/5</p>
                </div>
              ))}
            </div>
          )}

          {/* Availability */}
          {product.availability && (
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-800">Availability</h2>
              <p className="text-gray-600">{product.availability}</p>
            </div>
          )}

          <div className="space-y-4">
            <button
              onClick={handleBuyNow}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Buy Now
            </button>
          </div>

          {showEmailForm && (
            <div className="mt-4">
              <form onSubmit={handleSubmitEmail} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Send Purchase Link
                </button>
              </form>
            </div>
          )}

          {message && (
            <div className="mt-4 p-4 rounded-lg bg-blue-50 text-blue-700">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Kart;
