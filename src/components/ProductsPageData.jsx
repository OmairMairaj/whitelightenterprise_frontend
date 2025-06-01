import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import ProductList from './new/ProductList'
import RandomVideo from './new/RandomVideo'


const ProductsPageData = () => {
  const { id } = useParams();
  return (
    <div>
      <RandomVideo />
      <ProductList subCatId={id} />
    </div>
  )
}

export default ProductsPageData