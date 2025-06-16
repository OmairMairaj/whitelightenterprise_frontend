import React, { useEffect, useState } from "react";
// "bootstrap/dist/css/bootstrap.min.css"; // Make sure this is used or remove if not, or handled globally
import { useLocation, useNavigate } from "react-router-dom";
import config from "../../data/config";

const SubCategoryList = ({ categoryId: propCategoryId }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const currentCategoryId = propCategoryId;

  const fetchSubcategories = async (idToFetch) => {
    if (!idToFetch) {
      console.warn("No categoryId provided to fetchSubcategories");
      setLoading(false);
      setError(true);
      setSubcategories([]);
      return;
    }
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(`${config.apiEndpoint}/open/sub-category-list-all`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ categoryId: idToFetch }),
      });
      const data = await response.json();
      if (data.status && data.subcategories) {
        setSubcategories(data.subcategories);
      } else {
        setSubcategories([]);
        setError(true); // Set error if data is not as expected
        console.warn("Failed to fetch subcategories:", data.message || "Unknown error");
      }
    } catch (err) {
      setSubcategories([]);
      setError(true);
      console.error("Error fetching subcategories:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentCategoryId) {
      fetchSubcategories(currentCategoryId);
    } else {
      setLoading(false);
      // Optionally set an error or empty state if categoryId is critical
      // setSubcategories([]); 
      console.warn("SubCategoryList: categoryId prop is missing.");
    }
  }, [currentCategoryId]);

  const handleSubcategoryClick = (subCatId) => {
    navigate(`/products-list/${subCatId}`);
  };

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="text-xl text-gray-700">Loading Subcategories...</div>
      </div>
    );
  }

  if (error && subcategories.length === 0) { // Show error only if there are no subcategories to display
    return (
      <div className="container py-5 text-center">
        <div className="text-xl text-red-600">Failed to load subcategories.</div>
        <p className="text-gray-600 mt-2">Please try again later or check the category.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space-grotesk text-gray-800 inline-block tracking-tight">
          Products Categories
          </h2>
          <div className="mt-3 h-1.5 w-24 md:w-32 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {subcategories.length === 0 && !loading && !error && (
          <div className="text-center text-gray-600 text-lg">
            No subcategories found for this category.
          </div>
        )}

        {/* Using Bootstrap grid. If you prefer Tailwind, replace with Tailwind grid classes. */}
        <div className="row gx-3 gy-4 md:gx-4 md:gy-5">
          {subcategories.map((subcat) => (
            // Consider adjusting col-* classes for desired number of items per row at different breakpoints
            // e.g., col-6 col-sm-4 col-md-4 col-lg-3 for 2, 3, 3, 4 items respectively
            <div className="col-4 col-xl-3 flex" key={subcat._id || subcat.subCatId}>
              <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1.5 w-full flex flex-col border border-gray-200 hover:border-orange-400">
                {/* --- IMAGE CONTAINER: Height classes have been increased --- */}
                <div className="relative w-full bg-gray-100 overflow-hidden 
                                h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64"> {/* Increased heights */}
                  <img
                    src={subcat.image || 'https://via.placeholder.com/200x150?text=No+Image'}
                    className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                    alt={subcat.title}
                    onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/200x150?text=Image+Error"; }}
                  />
                </div>
                {/* --- END IMAGE CONTAINER --- */}

                <div className="p-2.5 sm:p-3 md:p-4 flex flex-col flex-grow text-center">
                  <h5 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 mb-1.5 md:mb-2 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2"
                      style={{ minHeight: '2.5em' }} // Helps keep card heights somewhat consistent if titles vary
                  >
                    {subcat.title}
                  </h5>
                  
                  <button
                    onClick={() => handleSubcategoryClick(subcat.subCatId)}
                    className="mt-auto w-full text-xs sm:text-sm bg-orange-500 hover:bg-orange-600 text-white font-medium py-1.5 sm:py-2 px-3 sm:px-4 rounded-md shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75 transition-all duration-300 ease-in-out"
                  >
                    View Products
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubCategoryList;