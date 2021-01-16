import React from 'react';
import logo from '../../FILES/logo.png'

export const Navbar = () => {
  return (
    <div className="navbar">
        <a href='/'>
          <img className='logo' src={logo} alt='logo'/>
        </a>

        <div className='navbarButtonsWrapper'>
          <a className='navButton' href='/'>CHI</a>
          <a className='navButton' href='/'>COME</a>
          <a className='navButton' href='/'>CONTATTI</a>
        </div>

    </div>
  );
}


