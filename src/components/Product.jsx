import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import config from "../data/config";
import banner from "../../pictures/mainbanner.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Product = () => {
  const { id } = useParams();
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState(null);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [message, setMessage] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [specs, setSpecs] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [allImages, setAllImages] = useState([]);




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

  useEffect(() => {
    if (product) {
      // Set specs
      if (product.description) {
        const specs = getSpecs(product.description);
        setSpecs(specs);
      }
      // Set images
      const images = [
        { img: product.image, caption: "Main Image" },
        { img: product.hoverImage, caption: "Hover Image" },
        ...(product.additionalImages?.map((imgObj, i) => ({
          img: imgObj.img,
          caption: product[`additional_img_cap_${i + 1}`] || "",
        })) || []),
      ];
      setAllImages(images);
    }
  }, [product]);

  useEffect(() => {
    if (!allImages.length) return;

    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) =>
        prevIndex === allImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [allImages, carouselIndex]);

  const getSpecs = (desc) => {
    // Split by commas that are NOT inside values (just in case), but your format looks safe for now
    const pairs = desc.split(",").filter(pair => pair.trim()); // remove empty pairs

    return pairs.map(pair => {
      if (pair.includes(":")) {
        const [key, ...rest] = pair.split(':');
        return {
          key: key.trim(),
          value: rest.join(':').trim() // Handles extra colons in values
        };
      }
      return { key: '', value: pair.trim() }; // fallback for stray values
    });
  }

  if (!product) {
    return <div className="text-center py-8">Loading product data...</div>;
  }

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <div className="relative w-full aspect-[2/1] sm:aspect-[3/1] max-w-[1920px] bg-gray-200">
        <img src={product.bannerImage || banner} alt="Banner" className="absolute inset-0 w-full h-full object-cover object-top" />
      </div>
      <div className="px-4 py-8">

        <div className="md:grid md:grid-cols-1 lg:grid-cols-12 gap-4 md:gap-0 flex flex-col-reverse ">
          {/* Product Images */}

          {/* Product Details */}
          <div className="space-y-6 col-span-1 lg:col-span-5 md:py-6 flex flex-col justify-between">
            <div className="flex flex-col space-y-4">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
                  {product.discount > 0 && (
                    <span className="text-lg text-green-600">-{product.discount}% off</span>
                  )}
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-700">{product.shortDescription}</p>
              </div>
            </div>

            <div className="space-y-4">
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
          <div className="hidden lg:flex lg:col-span-2"></div>

          <div className="relative w-full max-w-xl mx-auto mb-6 col-span-1 lg:col-span-5">
            {/* Carousel track */}
            <div className="relative overflow-hidden rounded-lg bg-white shadow-md">
              <div
                className="flex transition-transform duration-500"
                style={{
                  width: `${allImages.length * 100}%`,
                  transform: `translateX(-${carouselIndex * (100 / allImages.length)}%)`
                }}
              >
                {allImages?.map((imgObj, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-full"
                    style={{ width: `${100 / allImages?.length}%` }}
                  >
                    <img
                      src={imgObj.img}
                      alt={`Carousel ${idx + 1}`}
                      className="w-full h-96 object-contain bg-white"
                    />
                    {/* {imgObj.caption && (
                      <div className="text-center text-sm text-gray-600">{imgObj.caption}</div>
                    )} */}
                  </div>
                ))}
              </div>
              {/* <div className="lg:hidden absolute bottom-10 w-full flex justify-center mt-2 gap-2">
                {allImages?.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-9 h-1 rounded-full ${carouselIndex === idx ? 'bg-orange-300' : 'bg-gray-300'}`}
                    onClick={() => setCarouselIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  ></button>
                ))}
              </div> */}
              <button
                className="flex absolute left-2 top-1/2 -translate-y-1/2 p-2 z-10"
                onClick={() => setCarouselIndex((prev) => prev === 0 ? allImages?.length - 1 : prev - 1)}
                aria-label="Previous"
              >
                <ChevronLeft className="h-8 w-8 text-[#b9b9b9]" />
              </button>
              <button
                className="flex absolute right-2 top-1/2 -translate-y-1/2 p-2 z-10"
                onClick={() => setCarouselIndex((prev) => prev === allImages?.length - 1 ? 0 : prev + 1)}
                aria-label="Next"
              >
                <ChevronRight className="h-8 w-8 text-[#b9b9b9]" />
              </button>
            </div>
            <div className="flex flex-wrap pt-2 gap-1.5">
              {allImages?.map((imgObj, idx) => (
                <div
                  key={idx}
                  className={`flex w-[24%] rounded-md  shadow-sm ${carouselIndex == idx ? 'border-1 border-orange-400' : 'border-1 border-gray-300'} overflow-hidden`}
                  onClick={() => setCarouselIndex(idx)}
                >
                  <img
                    src={imgObj.img}
                    alt={`Carousel ${idx + 1}`}
                    className="w-full h-full object-contain"
                  />
                  {/* {imgObj.caption && (
                      <div className="text-center text-sm text-gray-600">{imgObj.caption}</div>
                    )} */}
                </div>

              ))}

            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">Specifications</h2>
          <table className="min-w-full text-sm border">
            <tbody>
              {specs?.map(({ key, value }, idx) => (
                <tr key={idx} className="odd:bg-[#e7e7e7]">
                  <td className="font-semibold px-2 py-1 border min-w-44">{key}</td>
                  <td className="px-2 py-1 border">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
};

export default Product;
