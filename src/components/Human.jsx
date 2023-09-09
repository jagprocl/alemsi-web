import React from 'react';
import Button from './Button';

const Human = () => {
  return (
    <>
      <div className='human-container'>
        <div className='left-section'>
          <div className='left-content'>
            <h1>
              Recurso <span style={{ fontWeight: '500' }}>Humano</span>
            </h1>
            <p>
              Nuestro equipo es el pilar de nuestra empresa de limpieza.
              Valoramos su capacitación, motivación y compromiso para ofrecer
              resultados excepcionales. Fomentamos un ambiente colaborativo que
              promueve el crecimiento personal y profesional. Juntos, superamos
              expectativas y establecemos nuevos estándares en la industria de
              la limpieza.
            </p>
          </div>
          <div className='left-footer'>
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
        <div className='right-image'></div>
      </div>
    </>
  );
};

export default Human;
