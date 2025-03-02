import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation,useNavigate } from "react-router-dom";
import { categories } from "../data/data";
 


const CarouselAndCategories: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract subcategory name from the URL
  const subcategoryName = location.pathname.split("/")[2];

  // Find the category that contains the subcategory
  const category = categories.find((cat) =>
    cat.subcategories?.some(
      (subcat) => subcat.title.toLowerCase() === subcategoryName.toLowerCase()
    )
  );

  // Find the specific subcategory
  const subcategory = category?.subcategories?.find(
    (subcat) => subcat.title.toLowerCase() === subcategoryName.toLowerCase()
  );
  console.log(subcategory)

  if (!subcategory) {
   
    return <div className="text-center mt-5">Subcategory not found</div>;
  }

  const handleSubcategoryClick = (title: string) => {
    // Navigate to a different page for the subcategory (if necessary)
    navigate(`/subsubcategory/${title}`, { state: { title } });
  };

  return (
    <div>
      {/* Hero Slider Section */}
      <img
                  
          src=""       
                  
                />

      {/* Categories Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Categories</h2>
        <div className="row">
        {subcategory.subsubcategories?.map((subsubcat, index) =>  (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div className="card text-center border-0 shadow-sm">
                <img
                  src={subsubcat.imgSrc}
                  className="card-img-top img-fluid"
                  alt={subsubcat.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{subsubcat.title}</h5>
                  <a onClick={() => handleSubcategoryClick(subsubcat.title)} className="btn btn-outline-dark">
                    Get its
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselAndCategories;
