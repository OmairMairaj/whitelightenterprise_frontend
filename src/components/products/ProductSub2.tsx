import React from 'react';
import { Link } from 'react-router-dom';
import { products} from '../../data/products';

const Products2 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="section-header">
        <h2 >pesto cube series </h2>
        <a href="#" className="view-all">View all</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link 
            key={product.id} 
            to={`/product/${product.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600 mt-1">{product.shortDescription}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
                {product.discount && (
                  <span className="text-sm text-green-600">-{product.discount}% off</span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products2;