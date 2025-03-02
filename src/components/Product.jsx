import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import config from "../data/config";

const Product = () => {
  const { id } = useParams();
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState(null);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [message, setMessage] = useState("");
  const [mainImage, setMainImage] = useState("");

  // Fetch product data on component mount
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`${config.apiEndpoint}/open/product-data`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ slug: id }),
        });

        const result = await response.json();
        if (result.status) {
          const productData = result.DataRes;
          setProduct(productData);
          console.log(productData, "...");
          setMainImage(productData.image);
        } else {
          setMessage("Failed to fetch product data.");
        }
      } catch (error) {
        setMessage("An error occurred while fetching product data.");
      }
    };

    fetchProductData();
  }, [id]);

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
          product_name: product.title,
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

  if (!product) {
    return <div className="text-center py-8">Loading product data...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <img
            src={`${mainImage}`} // Display the current main image
            alt={`img`}
            className="w-full h-96 rounded-lg object-contain bg-white shadow-md"
            onMouseEnter={() => setMainImage(product.hoverImage)} // Update main image on hover
            onMouseLeave={() => setMainImage(product.image)} // Reset to the original image
          />
          <div className="grid grid-cols-4 gap-2">
            {product.additionalImages?.map((additionalImage, index) => {
              const captionField = `additional_img_cap_${index + 1}`;
              const caption = product[captionField] || ``; // Fallback if caption is missing

              return (
                <div key={index} className="flex flex-col space-y-2 relative">
                  <img
                    src={additionalImage.img}
                    alt={`${product.title} view ${index + 1}`}
                    className={`w-full h-24 object-contain bg-white rounded-md cursor-pointer 
            ${mainImage === additionalImage.img ? 'border-2 border-blue-500' : ''}`}
                    onMouseEnter={() => setMainImage(additionalImage.img)} // Update main image on hover
                    onMouseLeave={() => setMainImage(product.image)} // Reset to original image
                  />
                  <div className="text-center text-sm text-gray-600">{caption}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
            {product.discount > 0 && (
              <span className="text-lg text-green-600">-{product.discount}% off</span>
            )}
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600">{product.description}</p>
          </div>

          {/* Availability */}
          {product.availability && (
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-800">Availability</h2>
              <p className="text-gray-600">In Stock</p>
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

export default Product;
