import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

  if (!subcategory) {
    return <div className="text-center mt-5">Subcategory not found</div>;
  }

  const handleSubcategoryClick = (title: string) => {
    // Navigate to a different page for the subcategory (if necessary)
    navigate(`/subcategory/${title}`, { state: { title } });
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">{subcategory.title}</h2>
      <p className="text-center mb-5">{subcategory.description}</p>

      {/* Display subcategories */}
      <div>
        <h3 className="text-center mb-4">Subcategories</h3>
        <div className="row mb-5">
          {subcategory.subsubcategories?.map((subsubcat, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div
                className="card text-center border-0 shadow-sm"
                onClick={() => handleSubcategoryClick(subsubcat.title)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={subsubcat.imgSrc}
                  alt={subsubcat.title}
                  className="card-img-top img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">{subsubcat.title}</h5>
                  <p className="card-text">{subsubcat.description}</p>
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
