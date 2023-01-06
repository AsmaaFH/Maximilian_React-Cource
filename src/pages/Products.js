import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <ul>
      <li>
        <Link to="/products/p1">Book</Link>
      </li>
      <li>
        <Link to="/products/p2">Product</Link>
      </li>
      <li>
        <Link to="/products/p3">Carbpet</Link>
      </li>
    </ul>
  );
};

export default Products;
