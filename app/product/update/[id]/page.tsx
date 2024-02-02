'use client';
import UpdateProduct from '@/src/product/productCrud/updateProduct';
import Navbar from '@/src/shared/component/Navbar';

import React from 'react';
const page = () => {
  return (
    <React.Fragment>
      <Navbar />
      <UpdateProduct />
    </React.Fragment>
  );
};

export default page;
