import React from 'react';
import { logodata } from '../local/logodata';
import LogoCard from './LogoCard';

const LogoGrid = () => {
  return (
    <>
      <div className='section-logo'>
        {logodata.map((d, k) => (
          <LogoCard key={k} {...d}></LogoCard>
        ))}
      </div>
    </>
  );
};

export default LogoGrid;
