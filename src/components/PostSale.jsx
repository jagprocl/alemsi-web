import React from 'react';

const PostSale = () => {
  return (
    <>
      <div className='postsale-container'>
        <div className='postsale-item'>
          <i
            className='icon-headphones'
            style={{
              color: '#13457D',
              marginRight: '8px',
              fontSize: '20px',
              position: 'relative',
              top: '2px',
            }}
          ></i>{' '}
          <p>Servicio Post Venta</p>
        </div>
        <div className='following-item'>
          <i
            className='icon-location'
            style={{
              color: '#13457D',
              marginRight: '8px',
              fontSize: '20px',
              position: 'relative',
              top: '2px',
            }}
          ></i>{' '}
          <p>Seguimiento de servicio</p>
        </div>
      </div>
    </>
  );
};
export default PostSale;
