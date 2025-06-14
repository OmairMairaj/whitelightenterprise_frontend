import React from 'react';
import { useParams } from 'react-router-dom';
import SubCatList from './new/SubCatList';

// Assume image is at public/images/bannercategory.jpg
const BANNER_IMAGE_PATH = "/images/bannercategory1.jpg";
const OLD_DEFAULT_PLACEHOLDER_PATH_STRING = "public/static/bannercategory1.jpg";

const SubCategories = () => {
  const { id } = useParams();

  const showActualImage = BANNER_IMAGE_PATH && BANNER_IMAGE_PATH !== OLD_DEFAULT_PLACEHOLDER_PATH_STRING;

  return (
    <div className='w-full'>
      {/* Banner Image */}
      {showActualImage ? (
        <img
          src={BANNER_IMAGE_PATH}
          alt="Category Banner"
          // Banner ke neeche margin aur kam kar diya hai (e.g., mb-2 or mb-1)
          // Adjust this value as per your preference
          className='w-full h-auto object-cover mb-2 md:mb-3'
        />
      ) : (
        <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-600 mb-2 md:mb-3">
          Banner Image Placeholder - Update BANNER_IMAGE_PATH. Current path is: {BANNER_IMAGE_PATH || "Not set"}
        </div>
      )}

      {/* "Sub Categories" Heading ko HATA diya gaya hai */}
      {/*
      <div className="px-4 py-2">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 md:mb-4 text-center">
          Sub Categories
        </h2>
      </div>
      */}

      {/* SubCategory List */}
      <SubCatList categoryId={id} />
    </div>
  );
};

export default SubCategories;