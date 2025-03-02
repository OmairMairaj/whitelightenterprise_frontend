import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import HomeVideo from './new/HomeVideo'
import SubCatList from './new/SubCatList'
import RandomVideo from './new/RandomVideo'

const subCategories = () => {
  const { id } = useParams();
  return (
    <div className='w-full'>
      <RandomVideo />
      <SubCatList categoryId={id} />
    </div>
  )
}

export default subCategories