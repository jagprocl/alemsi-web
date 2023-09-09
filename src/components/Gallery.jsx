import React from 'react';

const Gallery = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className='left-shape'></div>
        <div className='image-container-01'></div>
        <div className='image-container-02'></div>
        <div className='right-shape'></div>
      </div>
    </>
  );
};

export default Gallery;
