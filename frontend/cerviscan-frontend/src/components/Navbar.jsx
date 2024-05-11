import React from 'react'
import "../css files/Navbar.css"
import Logo from '../assets/logo.png'

export const Navbar = () => {
  return (
    <>

    <div className='navigate'>
    <nav className='webNav'>

    <img src={ Logo } />


      <ul className='navlist'>
        <li className='navOptions'><a href="#">Classify</a></li>
        <li className='navOptions'><a href="#">Contact Us</a></li>
      </ul>
    </nav>
    </div>
    </>
  )
}