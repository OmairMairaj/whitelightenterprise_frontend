import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router-dom";
import config from "../../data/config";

const subCatList = ({ categoryId }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // State for subcategories, loading, and error
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Extract subcategory name from the URL
  const subcategoryName = location.pathname.split("/")[2];

  // Fetch subcategories from API (POST request)
  const fetchSubcategories = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(`${config.apiEndpoint}/open/sub-category-list-all`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          categoryId: categoryId,  // Send the categoryId in the body of the POST request
        }),
      });

      const data = await response.json();
      console.log(data.subcategories, '====================================');

      console.log('data.subcategories', data.subcategories)
      if (data.status && data.subcategories) {
        setSubcategories(data.subcategories);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
      console.error("Error fetching subcategories:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch categoryId from URL or other logic
    const categoryId = location.pathname.split("/")[1]; // Assuming the categoryId is in the URL
    fetchSubcategories(categoryId);
  }, [location]);




  const handleSubcategoryClick = (subCatId) => {
    navigate(`/products-list/${subCatId}`, { state: { subCatId } });
  };

  return (
    <div>



      <div className="container py-5">
        <h2 className="text-center mb-4">Sub Categories</h2>
        <div className="row">
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : error ? (
            <div className="text-center text-red-500">Failed to load categories. Please try again later.</div>
          ) : (
            subcategories.map((subsubcat, index) => (
              <div className="col-md-6 col-lg-3 mb-4" key={index}>
                <div className="card text-center border-0 shadow-sm">
                  <img
                    src={`${subsubcat.image}`}
                    className="card-img-top img-fluid h-80 w-full object-contain"
                    alt={subsubcat.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{subsubcat.title}</h5>
                    <a
                      onClick={() => handleSubcategoryClick(subsubcat.subCatId)}
                      className="btn btn-outline-dark"
                    >
                      Get it
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default subCatList;
