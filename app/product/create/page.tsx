import React from 'react';
import Navbar from '@/src/shared/component/Navbar';
import CreateProduct from '@/src/product/productCrud/createProduct';

const page = () => {
  return (
    <React.Fragment>
      <Navbar />
      <CreateProduct />
    </React.Fragment>
  );
};

export default page;
