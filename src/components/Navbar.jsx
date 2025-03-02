import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingCart } from 'lucide-react';
import navlogo1 from "../../pictures/navlogo.png"
import config from "../data/config";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState({});
  const [loading, setLoading] = useState(true);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);


      const response = await fetch(`${config.apiEndpoint}/open/category-list-all`, {
        method: "POST",  // Change to POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // Add any data you want to send in the request body (if required)
          // Example: categoryId: "some_id"
        }),
      });

      const data = await response.json();

      if (data.status && data.categories) {
        setCategories(data.categories);
        console.log("Nav data:", data.categories);
      }
    } catch (err) {

      console.error("Error fetching categories:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Subcategories for a Specific Category
  const fetchSubCategories = async (catId) => {
    if (!subCategories[catId]) {
      try {
        const response = await fetch(`${config.apiEndpoint}/open/sub-category-list-all`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ categoryId: catId }),
        });

        const data = await response.json();
        if (data.status && data.subcategories) {
          setSubCategories((prev) => ({ ...prev, [catId]: data.subcategories }));
        }
      } catch (err) {
        console.error("Error fetching subcategories:", err);
      }
    }
  };


  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <a target="_blank" href="https://wa.me/+919168948474?text=I'm%20interested%20in%20your%20light%20">
          Contact on WhatsApp for offer </a>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        {/* Left Section: Logo */}
        <div className="nav-left">
          <img src={navlogo1} height="50px" width="60px" />
          <Link to="/" className="logo-text">
            White Light
          </Link>
        </div>

        {/* Center Section: Links */}
        <div className={`nav-center ${menuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link">Home</Link>

          {/* Categories with Hover Dropdown */}
          <div className="nav-item dropdown" onMouseEnter={() => setHoveredCategory(null)}>
            <Link to="/#" className="nav-link">
              Categories
            </Link>
            <ul className="dropdown-menu">
              {categories.map((category) => (
                <li
                  key={category._id}
                  className="dropdown-item"
                  onMouseEnter={() => {
                    setHoveredCategory(category.catId);
                    fetchSubCategories(category.catId);
                  }}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <Link to={`/sub-categories/${category.catId}`} className="dropdown-link">
                    {category.title}
                  </Link>

                  {/* Subcategories Dropdown (Shown on Hover) */}
                  {hoveredCategory === category.catId && subCategories[category.catId] && (
                    <ul className="dropdown-submenu">
                      {subCategories[category.catId].map((subCat) => (
                        <li key={subCat._id} className="dropdown-item">
                          <Link to={`/products-list/${subCat.subCatId}`} className="dropdown-link">
                            {subCat.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}


            </ul>
          </div>

          <Link to="/about-us" className="nav-link">About</Link>
          <Link to="/contact-us" className="nav-link">Contact us</Link>

        </div>

        {/* Right Section: Log In and Cart */}
        <div className="nav-right">
          <Search size={20} className="icon" />
          <Link to="/cart" className="nav-cart">
            <ShoppingCart size={20} />
          </Link>
          <Menu
            size={25}
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
