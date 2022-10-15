import React from 'react'
import './navbar.css'

import {GiHamburgerMenu} from 'react-icons/gi'
import {RiCloseLine} from 'react-icons/ri'
import {BsIntersect} from 'react-icons/bs'

import { useState } from 'react'

const Navbar = () => {

  const [click,setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <h3><BsIntersect className='logo'/>INTERIOR</h3>

        <ul className={click ? 'menu active' : 'menu'}>
          <li className='list'><a href="#about" className='links'>About</a></li>
          <li className='list'><a href="#services" className='links'>Services</a></li>
          <li className='list'><a href="#project" className='links'>Project</a></li>
          <li className='list'><a href="#contact" className='links'>Contact</a></li>
        </ul>
        
        <div className="border"><button className='button'><p>Try for Free</p></button></div>
        <div className="hamburger" onClick={handleClick}>{click ? (<RiCloseLine className='icon'/>) : (<GiHamburgerMenu className='icon'/>)}</div>

      </div>
      </nav>
  )
}

export default Navbar