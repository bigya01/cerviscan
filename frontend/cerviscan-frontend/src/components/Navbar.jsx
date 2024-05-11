import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../css files/Navbar.css';
import './ContactUs'

export const Navbar = () => {
  return (
    <div className='navigate'>
      {/* First Navbar for mobile view */}
      <nav className='webNav mobileNav'>
        <Link to="/">
          <img src={Logo} className='logo' alt="Logo" />
        </Link>
      </nav>
      {/* Second Navbar for mobile view */}
      <nav className='webNav mobileNav'>
        <ul className='navlist'>
          <li className='navOptions'><Link to="/classify">Classify</Link></li>
          <li className='navOptions'><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
      {/* Navbar for desktop view */}
      <nav className='webNav desktopNav'>
        <Link to="/">
          <img src={Logo} className='logo' alt="Logo" />
        </Link>
        <ul className='navlist'>
          <li className='navOptions'><Link to="/classify">Classify</Link></li>
          <li className='navOptions'><Link to="/ContactUs">Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  );
}
