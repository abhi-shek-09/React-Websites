import React from 'react'
import './navbar.css'
const Navbar = () => {
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
                <h3 className='navbar__heading-children'>M I R A</h3>
                <h3 className='navbar__heading-children'>M I K A T I</h3>
            </div>
            <div className='navbar__links-container2'>
                <p><a href='#About' alt='About Us'>About Us</a></p>
            </div>
        </div>
    </div>
  )
}

export default Navbar