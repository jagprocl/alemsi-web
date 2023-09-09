import React from 'react';

const ProductCard = ({ title, productType, image }) => {
  return (
    <>
      <div className='product-card-container'>
        <div className='gradient-border'>
          <div className='upper-content'>
            <div
              className='image-container'
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        </div>
        <div className='footer'>
          <h3 className='title'>{title}</h3>
          <p className='product-type'>{productType}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
