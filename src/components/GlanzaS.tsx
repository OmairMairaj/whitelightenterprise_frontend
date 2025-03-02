import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Glanza = () => {
  const products = [
    {
      id: 1,
      name: "GLANZA SQ BLACK BLACK",
      price: 29999,
      discount: 20,
      shortDescription: "Elegant crystal chandelier with modern design",
      description: "Light is a form of energy essential for life on Earth, traveling as electromagnetic waves. It enables vision, drives photosynthesis, and influences biological rhythms. The Sun is the primary natural source, while artificial sources like bulbs and LEDs illuminate our modern world. Light exhibits fascinating properties like reflection, refraction, and dispersion, creating rainbows and optical illusions. It powers technology, including fiber optics, lasers, and solar panels. Culturally, light symbolizes hope, knowledge, and enlightenment. From guiding ships with lighthouses to advancing medicine with lasers, light continues to shape human progress while connecting us to the beauty of the natural world.",
      image: "main/category/GLANZA SQUARE/GLANZA SQ BLACK BLACK.jpg",
      hoverImage: "src/components/home/main/slider-banner/banner2.jpg",
      additionalImages: [
        "main/category/GLANZA SQUARE/GLANZA SQ BLACK CHROME.jpg",
        "main/category/GLANZA SQUARE/GLANZA SQ BLACK ROSE GOLD.jpg",
        "src/components/home/main/slider-banner/banner6.jpg"
      ]
    },
    
    {
      id: 3,
      name: "Pendant Light Collection",
      price: 18999,
      discount: 10,
      shortDescription: "Contemporary pendant light set",
      description: "Set of three contemporary pendant lights with adjustable heights. Perfect for kitchen islands and dining areas.",
      image: "src/components/home/main/slider-banner/banner2.jpg",
      additionalImages: [
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&q=80"
      ]
    },
    {
      id: 4,
      name: "Pendant Light Collection",
      price: 18999,
      discount: 10,
      shortDescription: "Contemporary pendant light set",
      description: "Set of three contemporary pendant lights with adjustable heights. Perfect for kitchen islands and dining areas.",
      image: "src/components/home/main/slider-banner/banner3.jpg",
      additionalImages: [
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&q=80"
      ]
    },
    {
      id: 5,
      name: "Pendant Light Collection",
      price: 18999,
      discount: 10,
      shortDescription: "Contemporary pendant light set",
      description: "Set of three contemporary pendant lights with adjustable heights. Perfect for kitchen islands and dining areas.",
      image: "src/components/home/main/slider-banner/banner4.jpg",
      additionalImages: [
        "src/components/home/main/slider-banner/banner1.jpg",
        "src/components/home/main/slider-banner/banner1.jpg",
        "src/components/home/main/slider-banner/banner1.jpg"
      ]
    },
     ];

  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
      {/* Navbar Placeholder */}
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Crystal Collection
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container text-center my-4">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1>Crystal Collection</h1>
            <p>Shimmering Elegance Just For You</p>
          </div>
          <div className="col-md-6">
            <img
              src="https://www.whiteteak.com/media/catalog/category/marquee-collection_exclusive-collection-banner.jpg"
              alt="Crystal Chandelier"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button
            className="btn mx-2"
            style={{
              borderColor: "#746B61",
              color: "#746B61",
              backgroundColor: "transparent",
              borderWidth: "2px",
              borderStyle: "solid",
              fontWeight: 800,
            }}
          >
            Best Sellers
          </button>
          <button
            className="btn mx-2"
            style={{
              borderColor: "#746B61",
              color: "#746B61",
              backgroundColor: "transparent",
              borderWidth: "2px",
              borderStyle: "solid",
              fontWeight: 800,
            }}
          >
            New Arrivals
          </button>
          <button
            className="btn mx-2"
            style={{
              borderColor: "#746B61",
              color: "#746B61",
              backgroundColor: "transparent",
              borderWidth: "2px",
              borderStyle: "solid",
              fontWeight: 800,
            }}
          >
            Deals
          </button>
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="trending-section">
        <div className="containerm">
          <div className="trending-items">
            {products.map((product) => (
              <a
                href={product.link} // Use React Router's <Link> if applicable
                key={product.id}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="trending-item">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default  Glanza;
