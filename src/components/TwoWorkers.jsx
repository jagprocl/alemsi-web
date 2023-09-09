import React from 'react';
import Button from './Button';
import Diamond from '../assets/diamonds.svg';

const TwoWorkers = () => {
  return (
    <>
      <div className='twoworkers-container'>
        <div className='diamond-container'>
          <img className='diamond' src={Diamond} alt='' />
        </div>

        <div className='gradient-border'>
          <div className='workers-content'>
            <div className='left-section'>
              <div className='left-shape'></div>
              <div className='image-container'></div>
            </div>
            <div className='right-section'>
              <div className='content-section'>
                <h1>
                  Trabajamos utilizando{' '}
                  <span style={{ fontWeight: '500', color: '#BF85FF' }}>
                    2workers
                  </span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. In neque aliquet
                  lobortis diam mauris. Amet ipsum vivamus arcu odio mauris. In
                  et amet et vel nullam eget suscipit. Massa egestas eget cursus
                  pellentesque est egestas nec. Eget cras adipiscing integer
                  aliquam. Ullamcorper semper orci id cursus sagittis
                </p>
              </div>
              <div className='section-footer'>
                <Button
                  className='button-dark-blue'
                  label={
                    <>
                      <span>Conoce más sobre 2Workers</span>
                      <i
                        className='icon-arrow-right2'
                        style={{
                          color: '#ffffff',
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
      </div>
    </>
  );
};

export default TwoWorkers;
