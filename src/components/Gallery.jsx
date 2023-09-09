import React from 'react';
import Photo01 from '../assets/photo-01.jpg';
import Photo02 from '../assets/photo-02.jpg';

const Gallery = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className='image-container'
          style={{ backgroundImage: `url(${Photo01})` }}
        ></div>
        <div
          className='image-container'
          style={{ backgroundImage: `url(${Photo02})` }}
        ></div>
        <div className='image-container'></div>
      </div>
    </>
  );
};

export default Gallery;
