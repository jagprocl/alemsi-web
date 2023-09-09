import React from 'react';
import Gallery from './Gallery';
import Button from './Button';

const About = () => {
  return (
    <>
      <div className='about-container'>
        <div className='about-gallery-container'>
          <Gallery className='gallery-left'></Gallery>
          <div className='right-space'></div>
        </div>
        <div className='about-content'>
          <div className='left-space'></div>
          <div className='content-section'>
            <div className='upper-section'>
              <h1>
                Somos <span style={{ fontWeight: 500 }}>Alemsi</span>{' '}
              </h1>
              <p>
                Somos una empresa que se ha expandido a lo largo de la octava,
                novena y décimo sexta región, con una reconocida experiencia de
                más de 20 años, comprometida en crear soluciones inteligentes,
                desarrollar integralmente a las personas y asegurar la calidad.
                <br></br>
                <br></br>
                Nuestro quehacer es brindar servicios integrales en tres líneas:
              </p>
              <div className='highlight-container'>
                <div className='highlight'>
                  <p>Higiene</p>
                </div>
                <div className='highlight'>
                  <p>Desinfección</p>
                </div>
                <div className='highlight'>
                  <p>Mantenimiento</p>
                </div>
              </div>
              <p>
                Todo es posible por medio de un equipo de colaboradores
                capacitados en su áreas para cumplir estándares de calidad y
                seguridad.
              </p>
            </div>
            <div className='about-footer'>
              <Button
                className='button-light'
                label={
                  <>
                    <span>Contrata nuestros servicios</span>
                    <i
                      className='icon-arrow-right2'
                      style={{
                        color: '#13457D',
                        marginLeft: '16px',
                        fontSize: '20px',
                        position: 'relative',
                        top: '2px',
                      }}
                    ></i>
                  </>
                }
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
