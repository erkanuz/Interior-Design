import React from 'react'
import './header.css'

import FI from '../../assets/1.svg'

const Header = () => {
  return (
    <section className='header section container' id='header'>
      <h2 className='h_main_title'>YOUR'RE DREAM IS OUR GOAL</h2>
      <div className="h_container grid">
        <img src={FI} alt="fi" className='fi img h_img' />

        <div className="h_data">
          <h1 className="h_title">SKETCH LUXURY<br/>INTERIOR DESIGN</h1>
          <p className='h_description'>Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space.</p>
          <div className='h_b'>
          <button className='button1'>GET STARTED</button>
          <button className='button2'>CONTACT US</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header