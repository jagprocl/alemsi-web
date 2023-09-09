import React from 'react';
import Button from './Button';

const ServiceCard = ({ title, description, image } = defaultProps) => {
  return (
    <>
      <div className='card-container'>
        <div
          className='upper-image'
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className='bottom-content'>
          <p className='title'>{title}</p>
          <p className='description'>{description}</p>
        </div>
        <div className='footer'>
          <Button
            className='button-light'
            label={
              <>
                <span>Contratar</span>
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
    </>
  );
};

ServiceCard.defaultProps = {
  title: 'Card Tilte',
  description: 'this is a long description to fill up space',
};

export default ServiceCard;
