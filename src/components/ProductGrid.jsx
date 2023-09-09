import React from 'react';
import ProductCard from './ProductCard';
import { productdata } from '../local/productdata';

const ProductGrid = () => {
  const handleClick = (action, message) => {
    const topic = document.getElementById('topic');
    topic.value = message;
  };
  return (
    <>
      <div className='product-grid'>
        {productdata.map((d, k) => (
          <ProductCard key={k} {...d} onClick={handleClick} />
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
