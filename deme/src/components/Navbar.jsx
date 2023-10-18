// Navbar.js
import React, { useState } from 'react';
import './navbar.css';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div>
      <div className='navbar'>
        <div className='navbar_links'>
          <div className='navbar__links-container'>
            <p><a href='#Shop' alt='Shop'>Shop</a></p>
            <p><a href='#Collections' alt='Collections'>Collections</a></p>
            <p><a href='#Ourworld' alt='Our world'>Our world</a></p>
          </div>
        </div>
        <div className='navbar__heading'>
          <h1>MIRA MIKATI</h1>
        </div>
        <div className='navbar__links-container2'>
          <p><a href='#About' alt='About Us'>About Us</a></p>
        </div>
        <div className="navbar__menu-icon" onClick={() => setToggleMenu(!toggleMenu)}>
          {toggleMenu
            ? <RiCloseLine color="#000" size={30} />
            : <RiMenu3Line color="#000" size={30} />}
        </div>
      </div>
      {toggleMenu && (
        <div className="navbar__menu-container scale-up-center">
          <div className="navbar__menu-links">
            <p><a href='#Shop' alt='Shop'>Shop</a></p>
            <p><a href='#Collections' alt='Collections'>Collections</a></p>
            <p><a href='#Ourworld' alt='Our world'>Our world</a></p>
            <p><a href='#About' alt='About Us'>About Us</a></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
