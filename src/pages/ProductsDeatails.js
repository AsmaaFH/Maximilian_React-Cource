import React from 'react';
import { useParams } from 'react-router-dom';

const ProductsDeatails = () => {
  const params = useParams();
  console.log(params.productId);
  return <h1>ProductsDeatails</h1>;
};

export default ProductsDeatails;
