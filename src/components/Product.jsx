// src/components/Product.jsx
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import config from "../data/config";
import bannerPlaceholder from "../../pictures/mainbanner.png";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import WhatsAppButton from './home/whatapp'; // <--- CORRECTED IMPORT PATH

// --- THEME COLORS ---
const THEME_COLOR_BUTTON = '#B04300';
const THEME_COLOR_BUTTON_HOVER = '#8C3600';
const THEME_COLOR_BUTTON_ACTIVE = '#7A2E00';
const THEME_COLOR_TEXT_ON_DARK = '#FFFFFF';
const THEME_COLOR_PRIMARY_ACCENT = '#D35400';
const THEME_COLOR_TEXT_DARK = '#6D4C41';
const THEME_COLOR_BACKGROUND_LIGHT = '#FDF5E6';
const THEME_COLOR_CONTENT_BG = '#FFFFFF';
const THEME_COLOR_BORDER = '#E0DACA';
const THEME_COLOR_SUCCESS_BG = '#E6FFFA';
const THEME_COLOR_SUCCESS_TEXT = '#38A169';
const THEME_COLOR_ERROR_BG = '#FFF5F5';
const THEME_COLOR_ERROR_TEXT = '#C53030';
const THEME_COLOR_IMAGE_CONTAINER_BG = '#F8F8F8';
const THEME_COLOR_ARROW_ICON = '#FFFFFF';
const THEME_COLOR_ARROW_ICON_HOVER = '#E0E0E0';
// --- END THEME COLORS ---

const AUTOPLAY_INTERVAL = 4000;

const Product = () => {
  const { id } = useParams();
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState(null);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [message, setMessage] = useState("");
  const [specs, setSpecs] = useState(null);
  const [allImages, setAllImages] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const autoplayIntervalRef = useRef(null);

  useEffect(() => {
    const fetchProductData = async () => {
      if (!id) {
        setMessage("Product ID is missing.");
        return;
      }
      try {
        const response = await fetch(`${config.apiEndpoint}/open/product-data`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug: id }),
        });
        const result = await response.json();
        if (result.status) {
          setProduct(result.DataRes);
        } else {
          setMessage("Failed to fetch product data: " + (result.Msg || "Unknown API error"));
        }
      } catch (error) {
        setMessage("An error occurred while fetching product data.");
        console.error("Fetch error:", error);
      }
    };
    fetchProductData();
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (product) {
      if (product.description) setSpecs(getSpecs(product.description));

      const imagesForGallery = [];
      if (product.image) imagesForGallery.push({ img: product.image, caption: "Main Image" });
      if (product.hoverImage) imagesForGallery.push({ img: product.hoverImage, caption: "Hover Image" });
      if (product.additionalImages && Array.isArray(product.additionalImages)) {
        product.additionalImages.forEach((imgObj, i) => {
          if (imgObj && imgObj.img) {
            imagesForGallery.push({
              img: imgObj.img,
              caption: product[`additional_img_cap_${i + 1}`] || `Additional Image ${i + 1}`,
            });
          }
        });
      }

      const uniqueImages = imagesForGallery.filter((imgObj, index, self) =>
        imgObj.img && index === self.findIndex((t) => t.img === imgObj.img)
      );

      setAllImages(uniqueImages);
      setCurrentImageIndex(0);

      setShowEmailForm(false); setEmail(''); setMessage('');
    }
  }, [product]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      allImages.length > 0 ? (prevIndex === allImages.length - 1 ? 0 : prevIndex + 1) : 0
    );
  };
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      allImages.length > 0 ? (prevIndex === 0 ? allImages.length - 1 : prevIndex - 1) : 0
    );
  };
  const goToImage = (index) => {
    if (index >= 0 && index < allImages.length) {
      setCurrentImageIndex(index);
    }
  };

  useEffect(() => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
    if (allImages.length > 1) {
      autoplayIntervalRef.current = setInterval(nextImage, AUTOPLAY_INTERVAL);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [allImages, currentImageIndex]);

  const handleBuyNow = () => setShowEmailForm(true);

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    if (!product) return;
    setMessage('');
    const YOUR_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const YOUR_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const YOUR_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    if (YOUR_SERVICE_ID === 'YOUR_SERVICE_ID' || YOUR_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || YOUR_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      setMessage('EmailJS is not configured correctly. Please check environment variables or replace placeholders.');
      console.error('EmailJS not configured. Credentials are placeholders.');
      return;
    }
    try {
      await emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, {
        to_email: email,
        product_name: product.title,
        product_link: window.location.href,
        price: product.price,
      }, YOUR_PUBLIC_KEY);
      setMessage("Purchase link has been sent to your email!");
      setShowEmailForm(false); setEmail('');
    } catch (error) {
      setMessage(`Failed to send email. Error: ${error?.text || 'Unknown error'}. Please try again or contact support.`);
      console.error("EmailJS error:", error);
    }
  };

  const handleDownloadPdf = () => {
    if (product?.pdfFile) {
      const link = document.createElement('a');
      link.href = product.pdfFile;
      link.download = `${product.title || 'document'}_manual.pdf`;
      link.target = '_blank';
      document.body.appendChild(link); link.click(); document.body.removeChild(link);
    } else {
      setMessage('No PDF file available for this product.');
    }
  };

  const getSpecs = (desc) => {
    if (!desc || typeof desc !== 'string') return [];
    const pairs = desc.split(",").filter(pair => pair.trim());
    return pairs.map(pair => {
      if (pair.includes(":")) {
        const [key, ...rest] = pair.split(':');
        return { key: key.trim(), value: rest.join(':').trim() };
      }
      return { key: 'Note', value: pair.trim() };
    });
  };

  if (!product) {
    return (
      <div style={{ backgroundColor: THEME_COLOR_BACKGROUND_LIGHT, color: THEME_COLOR_TEXT_DARK }}
        className="flex items-center justify-center min-h-screen text-xl px-4 text-center">
        {message || "Loading product data..."}
      </div>
    );
  }

  const mainImageToDisplaySrc = allImages.length > 0 && allImages[currentImageIndex] ? allImages[currentImageIndex].img : bannerPlaceholder;
  const mainImageCaption = allImages.length > 0 && allImages[currentImageIndex] ? allImages[currentImageIndex].caption : "Product image";

  return (
    <div style={{ backgroundColor: THEME_COLOR_BACKGROUND_LIGHT }} className="min-h-screen relative">
      <div className="relative w-full aspect-[2.5/1] sm:aspect-[3/1] md:aspect-[3.5/1] max-w-[1920px] mx-auto bg-gray-300">
        <img
          src={product.bannerImage || bannerPlaceholder}
          alt={`${product.title} Banner`}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div style={{ backgroundColor: THEME_COLOR_CONTENT_BG }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 p-4 md:p-6 rounded-lg shadow-xl">

          {/* Left Column */}
          <div className="space-y-3">
            <div
              style={{ borderColor: THEME_COLOR_BORDER, backgroundColor: THEME_COLOR_IMAGE_CONTAINER_BG }}
              className="w-full h-72 sm:h-80 md:h-[400px] overflow-hidden rounded-lg border shadow-lg group relative flex items-center justify-center">
              <img
                src={mainImageToDisplaySrc}
                alt={mainImageCaption || product.title}
                className="max-w-full max-h-full object-contain object-center transition-opacity duration-300 ease-in-out p-1"
                key={mainImageToDisplaySrc}
              />
              {allImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    style={{ color: THEME_COLOR_ARROW_ICON }}
                    onMouseOver={(e) => e.currentTarget.style.color = THEME_COLOR_ARROW_ICON_HOVER}
                    onMouseOut={(e) => e.currentTarget.style.color = THEME_COLOR_ARROW_ICON}
                    className="absolute left-1 top-1/2 -translate-y-1/2 p-2 rounded-full hover:scale-110 transition-all duration-150 z-10 opacity-70 hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-1 focus:ring-white/50"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8" />
                  </button>
                  <button
                    onClick={nextImage}
                    style={{ color: THEME_COLOR_ARROW_ICON }}
                    onMouseOver={(e) => e.currentTarget.style.color = THEME_COLOR_ARROW_ICON_HOVER}
                    onMouseOut={(e) => e.currentTarget.style.color = THEME_COLOR_ARROW_ICON}
                    className="absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-full hover:scale-110 transition-all duration-150 z-10 opacity-70 hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-1 focus:ring-white/50"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8" />
                  </button>
                </>
              )}
            </div>

            {allImages && allImages.length > 1 && (
              <div className="relative">
                <div className="flex overflow-x-auto space-x-2 pb-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thumb-rounded-full">
                  {allImages.map((imgObj, index) => (
                    <button
                      key={`thumb-${index}-${imgObj.img}`}
                      onClick={() => goToImage(index)}
                      style={currentImageIndex === index ? { borderColor: THEME_COLOR_PRIMARY_ACCENT, ringColor: THEME_COLOR_PRIMARY_ACCENT } : { borderColor: 'transparent' }}
                      className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 p-0.5 border-2 rounded-md
                                  transition-all duration-200 ease-in-out transform
                                  focus:outline-none focus:ring-1 focus:ring-offset-1
                                  hover:scale-105 hover:shadow-sm
                                  active:scale-95
                                  ${currentImageIndex === index
                          ? `ring-2 ring-offset-1 scale-100 shadow-md opacity-100`
                          : `opacity-70 hover:opacity-100 hover:border-[${THEME_COLOR_PRIMARY_ACCENT}]`
                        }`}
                      aria-label={`View image ${index + 1} - ${imgObj.caption || ''}`}
                    >
                      <img
                        src={imgObj.img}
                        alt={imgObj.caption || `Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover rounded-sm"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
            {allImages.length === 0 && (
              <div style={{ borderColor: THEME_COLOR_BORDER, color: THEME_COLOR_TEXT_DARK }}
                className="h-72 sm:h-80 md:h-[400px] w-full flex items-center justify-center text-center p-4 rounded-lg border bg-gray-50 opacity-70">
                No product images available.
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-6 flex flex-col">
            <div> {/* Product Info */}
              <h1 style={{ color: THEME_COLOR_PRIMARY_ACCENT }} className="text-3xl font-bold sm:text-4xl">
                {product.title}
              </h1>
              <div className="flex items-baseline space-x-3 mt-2">
                <span style={{ color: THEME_COLOR_TEXT_DARK }} className="text-3xl font-bold">
                  ₹{product.price}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-lg text-gray-500 line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
                {product.discount && product.discount > 0 && (
                  <span style={{ backgroundColor: THEME_COLOR_BUTTON, color: THEME_COLOR_TEXT_ON_DARK }}
                    className="text-md font-semibold px-2.5 py-1 rounded-md shadow-sm">
                    {product.discount}% OFF
                  </span>
                )}
              </div>

              {product.shortDescription && (
                <div className="relative mt-4">
                  <div
                    style={{ color: THEME_COLOR_TEXT_DARK }}
                    className={`htmldesc prose prose-sm sm:prose-base max-w-none opacity-90 leading-relaxed transition-all duration-300 ease-in-out ${!isExpanded ? 'line-clamp-3 overflow-hidden' : 'max-h-[1000px]'
                      }`}
                    dangerouslySetInnerHTML={{ __html: product.shortDescription }}
                  />
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    style={{ color: THEME_COLOR_PRIMARY_ACCENT }}
                    className={`mt-2 hover:text-[${THEME_COLOR_BUTTON_HOVER}] font-medium text-sm transition-colors duration-150 ease-in-out hover:underline`}
                  >
                    {isExpanded ? 'View Less' : 'View More'}
                  </button>
                </div>
              )}

              {product.availability && (
                <div className="mt-4 space-y-1">
                  <h2 style={{ color: THEME_COLOR_TEXT_DARK }}
                    className="text-lg font-semibold">Availability</h2>
                  <p style={{ color: THEME_COLOR_TEXT_DARK }}
                    className="opacity-80">In Stock</p>
                </div>
              )}
            </div>

            <div style={{ borderColor: THEME_COLOR_BORDER }} className="space-y-3 pt-6 border-t mt-auto"> {/* Actions */}
              <button
                onClick={handleBuyNow}
                style={{ backgroundColor: THEME_COLOR_BUTTON, color: THEME_COLOR_TEXT_ON_DARK }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = THEME_COLOR_BUTTON_HOVER}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = THEME_COLOR_BUTTON}
                onFocus={(e) => e.currentTarget.style.boxShadow = `0 0 0 3px ${THEME_COLOR_BUTTON}40`}
                onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
                onMouseDown={(e) => e.currentTarget.style.backgroundColor = THEME_COLOR_BUTTON_ACTIVE}
                onMouseUp={(e) => e.currentTarget.style.backgroundColor = THEME_COLOR_BUTTON_HOVER}
                className={`w-full py-3.5 px-6 rounded-lg text-lg font-semibold shadow-md
                           hover:shadow-lg hover:scale-[1.02]
                           active:scale-[0.98] active:shadow-inner
                           transition-all duration-150 ease-in-out transform`}
              >
                Buy Now / Get Quote
              </button>

              {product.pdfFile && (
                <button
                  onClick={handleDownloadPdf}
                  style={{ color: THEME_COLOR_BUTTON, borderColor: THEME_COLOR_BUTTON, backgroundColor: THEME_COLOR_CONTENT_BG }}
                  onMouseOver={(e) => { const target = e.currentTarget; target.style.backgroundColor = THEME_COLOR_BACKGROUND_LIGHT; target.style.color = THEME_COLOR_BUTTON_HOVER; target.style.borderColor = THEME_COLOR_BUTTON_HOVER; }}
                  onMouseOut={(e) => { const target = e.currentTarget; target.style.backgroundColor = THEME_COLOR_CONTENT_BG; target.style.color = THEME_COLOR_BUTTON; target.style.borderColor = THEME_COLOR_BUTTON; }}
                  onFocus={(e) => e.currentTarget.style.boxShadow = `0 0 0 3px ${THEME_COLOR_BUTTON}40`}
                  onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
                  className={`w-full inline-flex items-center justify-center space-x-2 py-3 px-6 rounded-lg text-lg font-semibold shadow border-2 hover:scale-[1.02] hover:shadow-md active:scale-[0.98] transition-all duration-150 ease-in-out transform`}
                >
                  <Download className="w-5 h-5" />
                  <span>Download Manual</span>
                </button>
              )}
            </div>

            {showEmailForm && (
              <div style={{ backgroundColor: THEME_COLOR_BACKGROUND_LIGHT, borderColor: THEME_COLOR_BORDER }}
                className="mt-6 p-4 md:p-6 border rounded-lg shadow-sm">
                <h3 style={{ color: THEME_COLOR_TEXT_DARK }}
                  className="text-lg font-semibold mb-3">
                  Enter your email to proceed
                </h3>
                <form onSubmit={handleSubmitEmail} className="space-y-4">
                  <div>
                    <label htmlFor="email" style={{ color: THEME_COLOR_TEXT_DARK }}
                      className="block text-sm font-medium mb-1">
                      Email address
                    </label>
                    <input
                      type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      style={{ borderColor: THEME_COLOR_BORDER, color: THEME_COLOR_TEXT_DARK, backgroundColor: THEME_COLOR_CONTENT_BG }}
                      className={`w-full px-4 py-2.5 border rounded-lg
                                 text-base placeholder-gray-400
                                 focus:outline-none focus:ring-2 transition-colors duration-150`}
                      onFocus={(e) => { const target = e.currentTarget; target.style.borderColor = THEME_COLOR_PRIMARY_ACCENT; target.style.boxShadow = `0 0 0 2px ${THEME_COLOR_PRIMARY_ACCENT}40`; }}
                      onBlur={(e) => { const target = e.currentTarget; target.style.borderColor = THEME_COLOR_BORDER; target.style.boxShadow = 'none'; }}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    style={{ backgroundColor: THEME_COLOR_BUTTON, color: THEME_COLOR_TEXT_ON_DARK }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = THEME_COLOR_BUTTON_HOVER}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = THEME_COLOR_BUTTON}
                    onFocus={(e) => e.currentTarget.style.boxShadow = `0 0 0 3px ${THEME_COLOR_BUTTON}40`}
                    onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
                    onMouseDown={(e) => e.currentTarget.style.backgroundColor = THEME_COLOR_BUTTON_ACTIVE}
                    onMouseUp={(e) => e.currentTarget.style.backgroundColor = THEME_COLOR_BUTTON_HOVER}
                    className={`w-full py-2.5 px-4 rounded-lg font-medium shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.99] active:shadow-inner transition-all duration-150 ease-in-out transform`}
                  >
                    Send Purchase Link / Enquiry
                  </button>
                </form>
              </div>
            )}
            {message && (
              <div
                style={message.toLowerCase().includes('failed') || message.toLowerCase().includes('not configured') || message.toLowerCase().includes('error')
                  ? { backgroundColor: THEME_COLOR_ERROR_BG, color: THEME_COLOR_ERROR_TEXT, borderColor: THEME_COLOR_ERROR_TEXT }
                  : { backgroundColor: THEME_COLOR_SUCCESS_BG, color: THEME_COLOR_SUCCESS_TEXT, borderColor: THEME_COLOR_SUCCESS_TEXT }
                }
                className="mt-4 p-3 rounded-lg text-sm font-medium border opacity-90"
              >
                {message}
              </div>
            )}
          </div>
        </div>

        {specs && specs.length > 0 && (
          <div style={{ backgroundColor: THEME_COLOR_CONTENT_BG, borderColor: THEME_COLOR_BORDER }}
            className="w-full max-w-7xl mx-auto py-8 mt-8 shadow-xl rounded-lg p-4 md:p-6">
            <div className="space-y-3">
              <h2 style={{ color: THEME_COLOR_TEXT_DARK, borderColor: THEME_COLOR_PRIMARY_ACCENT }}
                className="text-2xl font-semibold border-b-2 pb-2">
                Specifications
              </h2>
              <div style={{ borderColor: THEME_COLOR_BORDER }}
                className="overflow-x-auto rounded-md border shadow-sm">
                <table className="min-w-full text-sm">
                  <tbody style={{ color: THEME_COLOR_TEXT_DARK }}>
                    {specs.map(({ key, value }, idx) => (
                      <tr key={`${key}-${idx}`} style={idx % 2 !== 0 ? { backgroundColor: THEME_COLOR_BACKGROUND_LIGHT, opacity: 0.9 } : { backgroundColor: THEME_COLOR_CONTENT_BG }}
                        className={`border-b last:border-b-0`}
                      >
                        <td style={{ borderColor: THEME_COLOR_BORDER }}
                          className="font-semibold px-3 py-2.5 sm:px-4 sm:py-3 border-r w-1/3 sm:w-1/4 whitespace-nowrap">{key}</td>
                        <td className="px-3 py-2.5 sm:px-4 sm:py-3">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      <WhatsAppButton />
    </div>
  );
};

export default Product;