import React from 'react';

const LogoCard = (props) => {
  return (
    <>
      <div
        className='client-logo-container'
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
    </>
  );
};

export default LogoCard;
