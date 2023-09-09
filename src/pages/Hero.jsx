import React from 'react';
import Button from '../components/Button';
import Gallery from '../components/Gallery';
import Spark from '../assets/spark.svg';

const Hero = (props) => {
  return (
    <>
      <div className='hero-main'>
        <div className='hero-left-shape'></div>
        <Gallery className='gallery-right'></Gallery>
        <div className='hero-content'>
          <div className='hero-left'>
            <img className='spark' src={Spark} alt='' />
            <p className='hero-title'>
              Más de <br />
              <span style={{ fontSize: '50px', fontWeight: 600 }}>
                20 años
              </span>{' '}
              <br />
              de trayectoria
            </p>
            <p className='hero-description'>
              Contrata nuestros servicios de limpieza, higiene y mantención para
              edificios, oficinas empresas y hogares.
            </p>
            <Button className='button-blue' label='Agendar ahora'></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
