import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure this is used or remove if not
import { useLocation, useNavigate } from "react-router-dom";
import config from "../../data/config";

const ProductList = ({ subCatId }) => {
    // console.log(subCatId);

    const location = useLocation();
    const navigate = useNavigate();

    const [ListData, setListData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [hoveredProduct, setHoveredProduct] = useState(null);

    const fetchListData = async () => {
        try {
            setLoading(true);
            setError(false);
            const response = await fetch(`${config.apiEndpoint}/open/products-list-by-subcat`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    subCatId: subCatId,
                }),
            });

            const data = await response.json();
            // console.log(data, "...");

            if (data.status && data.ListData) {
                // console.log(data.status && data.ListData);
                setListData(data.ListData);
            } else {
                setListData([]); // Set to empty array on error or no data
                // setError(true); // Optionally set error, or just show no products
                console.warn("No ListData received or status false:", data);
            }
        } catch (err) {
            setError(true);
            setListData([]); // Set to empty array on fetch error
            console.error("Error fetching ListData:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (subCatId) { // Only fetch if subCatId is present
            fetchListData();
        } else {
            setListData([]); // Clear data if no subCatId
            setLoading(false);
        }
    }, [subCatId]);

    const handleSubcategoryClick = (slug) => {
        navigate(`/product-data/${slug}`, { state: { slug } });
    };

    if (loading) {
        return (
            <div style={{ backgroundColor: "white", padding: "20px 0" }}>
                <div className="text-center">Loading products...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ backgroundColor: "white", padding: "20px 0" }}>
                <div className="text-center">Error fetching products. Please try again later.</div>
            </div>
        );
    }

    if (ListData.length === 0) {
        return (
            <div style={{ backgroundColor: "white", padding: "20px 0" }}>
                <div className="text-center">No products found in this category.</div>
            </div>
        );
    }

    return (
        <div style={{ backgroundColor: "white" }}>
            <div className="trending-section">
                <div className="containerm">
                    <div className="trending-items">
                        {ListData.map((product, index) => (
                            <div
                                key={product.id || index} // Prefer a stable product.id if available
                                className="product-card-wrapper" // Added a class for easier targeting
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    // marginBottom: "20px", // Removed: Handled by gap or specific mobile CSS
                                }}
                                onMouseEnter={() => setHoveredProduct(index)}
                                onMouseLeave={() => setHoveredProduct(null)}
                            >
                                <div className="trending-item">
                                    <img
                                        src={hoveredProduct === index && product.hoverImage ? product.hoverImage : product.image}
                                        className="h-56 w-56 object-contain rounded-t-xl bg-[#BFC6CA]" // Tailwind classes
                                        alt={product.title}
                                        onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/220x200?text=Image+Not+Found"; }} // Fallback image
                                    />
                                    <h3>{product.title}</h3>
                                    <p>{product.price}</p>
                                </div>
                                <button
                                    className="btn btn-primary mt-2 w-100" // Added mt-2 and w-100 for better button styling
                                    onClick={() => handleSubcategoryClick(product.slug)}
                                >
                                    Buy Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;