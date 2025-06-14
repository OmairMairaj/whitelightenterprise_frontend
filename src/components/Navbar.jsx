import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import navlogo1 from "../../pictures/navlogo.png"; // Make sure this path is correct
import config from "../data/config";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState({});
  const [loading, setLoading] = useState(true);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${config.apiEndpoint}/open/category-list-all`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      const data = await response.json();
      if (data.status && data.categories) {
        setCategories(data.categories);
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
    } finally {
      setLoading(false);
    }
  };

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
        console.error("Error fetching subcategories for " + catId + ":", err);
      }
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const toggleMobileDropdown = (categoryId) => {
    if (activeMobileDropdown === categoryId) {
      setActiveMobileDropdown(null);
      setActiveMobileSubmenu(null);
    } else {
      setActiveMobileDropdown(categoryId);
      if (categoryId === 'main-categories' && categories.length > 0) {
        // No specific fetch needed here unless categories themselves are dynamic per click
      }
      setActiveMobileSubmenu(null);
    }
  };

  const toggleMobileSubmenu = (subCatParentId, event) => {
    event.stopPropagation();
    if (activeMobileSubmenu === subCatParentId) {
      setActiveMobileSubmenu(null);
    } else {
      setActiveMobileSubmenu(subCatParentId);
      fetchSubCategories(subCatParentId); // Fetch subcategories if not already loaded
    }
  };

  const handleMenuLinkClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
      setActiveMobileDropdown(null);
      setActiveMobileSubmenu(null);
    }
  };

  return (
    <>
      {/* Announcement Bar REMOVED */}

      {/* Navbar: Added space-grotesk-font class for font context if needed, though individual elements set it */}
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""} space-grotesk-font`}>
        <div className="nav-left">
          <img src={navlogo1} alt="White Light Logo" className="logo-image" />
          <Link to="/" className="logo-text text-black" onClick={handleMenuLinkClick}>
            White Light
          </Link>
        </div>

        <div className={`nav-center ${menuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link" onClick={handleMenuLinkClick}>Home</Link>

          <div
            className="nav-item dropdown"
            onMouseEnter={() => !menuOpen && setHoveredCategory('main-categories')}
            onMouseLeave={() => !menuOpen && setHoveredCategory(null)}
          >
            <Link
              to="/#"
              className="nav-link"
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  toggleMobileDropdown('main-categories');
                }
              }}
            >
              Categories
              {window.innerWidth <= 768 && (categories.length > 0) && (
                <span className="dropdown-arrow">{activeMobileDropdown === 'main-categories' ? '▲' : '▼'}</span>
              )}
            </Link>
            <ul className={`dropdown-menu ${menuOpen && activeMobileDropdown === 'main-categories' ? 'mobile-active' : ''}`}>
              {loading && <li className="dropdown-item"><span className="dropdown-link">Loading...</span></li>}
              {!loading && categories.map((category) => (
                <li
                  key={category._id}
                  className="dropdown-item"
                  onMouseEnter={() => {
                    if (!menuOpen) {
                      setHoveredCategory(category.catId);
                      fetchSubCategories(category.catId);
                    }
                  }}
                  onMouseLeave={() => !menuOpen && setHoveredCategory('main-categories')}
                >
                  <Link
                    to={`/sub-categories/${category.catId}`}
                    className="dropdown-link"
                    onClick={(e) => {
                      if (window.innerWidth <= 768) {
                        // Check if this category has subcategories before deciding to toggle or navigate
                        fetchSubCategories(category.catId); // Ensure subcategories are fetched/checked
                        // A short delay might be needed if fetchSubCategories is slow and subCategories[category.catId] isn't updated immediately
                        setTimeout(() => {
                          if (subCategories[category.catId] && subCategories[category.catId].length > 0) {
                            e.preventDefault();
                            toggleMobileSubmenu(category.catId, e);
                          } else {
                            handleMenuLinkClick();
                          }
                        }, 50); // Small timeout to allow state to potentially update
                      }
                    }}
                  >
                    {category.title}
                    {window.innerWidth <= 768 && (subCategories[category.catId] && subCategories[category.catId].length > 0) && (
                      <span className="dropdown-arrow submenu-arrow">{activeMobileSubmenu === category.catId ? '▲' : '▼'}</span>
                    )}
                  </Link>

                  {((hoveredCategory === category.catId && !menuOpen) || (menuOpen && activeMobileSubmenu === category.catId)) &&
                    subCategories[category.catId] && subCategories[category.catId].length > 0 && (
                      <ul className={`dropdown-submenu ${menuOpen && activeMobileSubmenu === category.catId ? 'mobile-active' : ''}`}>
                        {subCategories[category.catId].map((subCat) => (
                          <li key={subCat._id} className="dropdown-item">
                            <Link
                              to={`/products-list/${subCat.subCatId}`}
                              className="dropdown-link"
                              onClick={handleMenuLinkClick}
                            >
                              {subCat.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                </li>
              ))}
              {!loading && categories.length === 0 && (
                <li className="dropdown-item"><span className="dropdown-link">No categories found</span></li>
              )}
            </ul>
          </div>

          <Link to="/about-us" className="nav-link" onClick={handleMenuLinkClick}>About</Link>
          <Link to="/contact-us" className="nav-link" onClick={handleMenuLinkClick}>Contact Us</Link>
        </div>

        <div className="nav-right">
          <button
            className="menu-icon-wrapper"
            onClick={() => {
              setMenuOpen(!menuOpen);
              if (menuOpen) {
                setActiveMobileDropdown(null);
                setActiveMobileSubmenu(null);
              }
            }}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <Menu size={28} className="menu-icon-svg" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;