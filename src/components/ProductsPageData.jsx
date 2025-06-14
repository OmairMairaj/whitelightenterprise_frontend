import React from 'react';
import { useParams } from 'react-router-dom';

import ProductList from './new/ProductList';

// Define the path to your banner image
const BANNER_IMAGE_PATH = "/images/2bnner1.jpg";

const ProductsPageData = () => {
  const { id } = useParams();

  return (
    <div className='w-full'>
      {/* Banner Image */}
      {BANNER_IMAGE_PATH ? (
        <img
          src={BANNER_IMAGE_PATH}
          alt="Products Banner"
          // Banner ki height h-40 se h-56 kar di gayi hai
          // Aap isko apni zaroorat ke mutabiq h-48, h-64 waghera bhi kar sakte hain.
          className='w-full h-70 object-cover mb-4 md:mb-6' // <--- HEIGHT YAHAN BADHAI GAYI HAI
        />
      ) : (
        // Placeholder ki height bhi update kar di
        <div className="w-full h-56 bg-gray-300 flex items-center justify-center text-gray-600 mb-4 md:mb-6"> {/* <--- HEIGHT YAHAN BHI */}
          Banner Image Placeholder - Check BANNER_IMAGE_PATH
        </div>
      )}

      {/* ProductList component waise hi rahega */}
      <ProductList subCatId={id} />
    </div>
  );
};

export default ProductsPageData;