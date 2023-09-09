import React from 'react';
import logo from '../assets/alemsi_logo.svg';
import Button from './Button';

const Navbar = (props) => {
  return (
    <>
      <div className='navbar'>
        <a href='#home'>
          <img src={logo} alt='' />
        </a>
        <ul className='nav-links'>
          <li>
            <a href='#'>Inicio</a>
          </li>
          <li>
            <a href='#'>Ofertas laborales</a>
          </li>
          <li>
            <a href='#'>Ficha técnica</a>
          </li>
          <li>
            <a className='button-green' href='#'>
              45 322 4290
            </a>
          </li>
          <li>
            <Button className='button-blue' label='Agendar ahora'></Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
