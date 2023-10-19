import React from 'react'
import './header.css'
const Header = (props) => {
  return (
    <div>
        <section className='header__image'>
            <img src={props.img} alt='girl pic'/>
        </section>
    </div>
  )
}

export default Header