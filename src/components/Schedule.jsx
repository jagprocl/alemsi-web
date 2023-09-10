import React from 'react';
import Button from './Button';

const Schedule = () => {
  return (
    <>
      <div className='schedule-container'>
        <div className='schedule-content'>
          <div className='schedule-component'></div>
          <div className='whatsapp-tip'>
            <div className='left-section'>
              <h1>¿Necesitas asistencia para agendar tu servicio?</h1>
              <p>Utiliza nuestro servicio de whatsapp</p>
              <Button
                className='button-light'
                label={
                  <>
                    <i
                      className='icon-whatsapp'
                      style={{
                        color: '#13457D',
                        marginRight: '16px',
                        fontSize: '20px',
                        position: 'relative',
                        top: '2px',
                      }}
                    ></i>
                    <span>Whatsapp</span>
                  </>
                }
              ></Button>
            </div>
            <div className='right-section'>
              <div className='top-shape'></div>
              <div className='bottom-shape'></div>
              <div className='mockup'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
