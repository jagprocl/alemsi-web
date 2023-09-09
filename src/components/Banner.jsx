import React from 'react';
import Arrow from '../assets/arrow.svg';
import Briefcase from '../assets/briefcase.svg';
import Button from './Button';

const Banner = () => {
  return (
    <>
      <div className='banner-container'>
        <div className='banner-content'>
          <div className='left-section'>
            <img className='briefcase' src={Briefcase} alt='' />
            <div className='description'>
              <h1>Trabaja con nosotros</h1>
              <p>Únete a nuestra empresa y trabaja con nosotros</p>
            </div>
          </div>
          <div className='right-section'>
            <p>Completa esta pequeña postulación en 5 minutos</p>
            <img className='arrow' src={Arrow} alt='' />
            <div className='button'>
              <Button className='button-green' label='Agendar ahora'></Button>
            </div>
          </div>
        </div>
        <div className='right-shape'></div>
      </div>
    </>
  );
};

export default Banner;
