import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
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

  // --- Start: Typewriter State ---
  const [taglineText, setTaglineText] = useState('');
  const fullTagline = "LED lighting";
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [isTaglineDeleting, setIsTaglineDeleting] = useState(false);
  // --- End: Typewriter State ---

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Start: Typewriter Effect ---
  useEffect(() => {
    const typingSpeed = 150; // milliseconds per character
    const deletingSpeed = 100; // milliseconds per character
    const pauseDuration = 2000; // Pause after typing/deleting

    const handleTyping = () => {
      if (isTaglineDeleting) {
        if (taglineIndex > 0) {
          setTaglineText((prev) => prev.substring(0, prev.length - 1));
          setTaglineIndex((prev) => prev - 1);
        } else {
          // Finished deleting, pause then start typing again
          setIsTaglineDeleting(false);
          // No need to reset taglineIndex here, it will be handled by the typing part
        }
      } else { // Typing
        if (taglineIndex < fullTagline.length) {
          setTaglineText((prev) => prev + fullTagline.charAt(taglineIndex));
          setTaglineIndex((prev) => prev + 1);
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => setIsTaglineDeleting(true), pauseDuration);
        }
      }
    };

    let timer;
    if (isTaglineDeleting && taglineIndex === 0) { // Special pause after deleting before re-typing
        timer = setTimeout(handleTyping, pauseDuration);
    } else {
        timer = setTimeout(handleTyping, isTaglineDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [taglineIndex, isTaglineDeleting, fullTagline]); // Removed taglineText from deps to avoid issues
  // --- End: Typewriter Effect ---

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
      } else {
        setCategories([]);
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchSubCategories = async (catId) => {
    if (!subCategories[catId] || subCategories[catId].length === 0) {
      try {
        const response = await fetch(`${config.apiEndpoint}/open/sub-category-list-all`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ categoryId: catId }),
        });
        const data = await response.json();
        if (data.status && data.subcategories) {
          setSubCategories((prev) => ({ ...prev, [catId]: data.subcategories }));
        } else {
          setSubCategories((prev) => ({ ...prev, [catId]: [] }));
        }
      } catch (err) {
        console.error("Error fetching subcategories for " + catId + ":", err);
        setSubCategories((prev) => ({ ...prev, [catId]: [] }));
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
      setActiveMobileSubmenu(null);
    }
  };

  const toggleMobileSubmenu = (category, event) => {
    event.stopPropagation();
    const catId = category.catId;
    if (activeMobileSubmenu === catId) {
      setActiveMobileSubmenu(null);
    } else {
      setActiveMobileSubmenu(catId);
      if (!subCategories[catId] || subCategories[catId].length === 0) {
        fetchSubCategories(catId);
      }
    }
  };

  const handleMenuLinkClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
      setActiveMobileDropdown(null);
      setActiveMobileSubmenu(null);
    }
  };

  const handleCategoryLinkClick = (e, category) => {
    if (window.innerWidth <= 768) {
      fetchSubCategories(category.catId).then(() => {});
      setTimeout(() => {
        const currentSubCats = subCategories[category.catId];
        if (currentSubCats && currentSubCats.length > 0) {
          e.preventDefault();
          toggleMobileSubmenu(category, e);
        } else {
          handleMenuLinkClick();
        }
      }, 100);
    } else {
      handleMenuLinkClick();
    }
  };



  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""} space-grotesk-font`}>
        <div className="nav-left">
          {/* Link wraps the image and text to make the whole logo area clickable */}
          <Link to="/" onClick={handleMenuLinkClick} className="logo-area-link">
            <img
              src="/images/logo.PNG" // UPDATED: Path to logo.PNG in public/images/
              alt="White Light Logo"
              className="logo-image"
            />
            <div className="logo-text-container">
              <span className="logo-text-main">WhiteLight</span>
              <span className="logo-text-tagline">
                {taglineText}
                <span className="typewriter-cursor"></span> {/* Static element for cursor via CSS */}
              </span>
            </div>
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
              className="nav-link categories-main-link"
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  toggleMobileDropdown('main-categories');
                }
              }}
            >
              Products
              {window.innerWidth <= 768 && (categories.length > 0 || loading) && (
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
                  onMouseLeave={() => {
                    if (!menuOpen) {
                      setHoveredCategory('main-categories');
                    }
                  }}
                >
                  <Link
                    to={`/sub-categories/${category.catId}`}
                    className="dropdown-link"
                    onClick={(e) => handleCategoryLinkClick(e, category)}
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