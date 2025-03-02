import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import ProductList from './new/ProductList'


const ProductsPageData = () => {
  const { id } = useParams();
  return (
    <div>

      <ProductList subCatId={id} />
    </div>
  )
}

export default ProductsPageData