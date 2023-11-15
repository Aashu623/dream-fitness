import React from 'react'
import Logo from '../../assets/dream-fitness-logo.png';
import './Header.css'
function Header() {
  return (
    <div className='header'>
        <img src={Logo} alt="" className='logo'/>
        <ul className='header-menu'>
            <li>Home</li>
            <li>Program</li>
            <li>Why Us</li>
            <li>Plan</li>
            <li>Testimonials</li>
        </ul>
    </div>
  )
}

export default Header;