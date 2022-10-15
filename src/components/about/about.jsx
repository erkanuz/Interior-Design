import React from 'react'
import './about.css'

import {AiFillDollarCircle, AiFillWindows} from 'react-icons/ai'
import {GiDiamondTrophy} from 'react-icons/gi'

const About = () => {
  return (
    <section className='about section container' id='about'>
      <div className="about_container grid">
        <div className="a_data">
        <h2 className="a_title">What we provide</h2>
        <p className="a_description">Our goal is to help you make your dreams come true and get the best quality service. We build strong partnerships with our clients, based on fairness and respect, and we value their loyalty. Our strict protocols ensure quality products and services, backed by full and continuous support.</p>
        </div>

        <div className='about_card'>
          <div className="card">
            <div className="about_icon"><GiDiamondTrophy className='a_i'/></div>
            <h3 className="card_title">Luxury<br/>Facillities</h3>
            <h2 className="card_subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit perferendis quam tenetur impedit ut, molestias obcaecati error excepturi aperiam corrupti nemo beatae natus laudantium eos.</h2>
            <a href="#about" className="card_link">LEARN MORE</a>
          </div>
          <div className="card s">
          <div className="about_icon"><AiFillDollarCircle className='a_i'/></div>
            <h3 className="card_title">Affordable<br/>Price</h3>
            <h2 className="card_subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit perferendis quam tenetur impedit ut, molestias obcaecati error excepturi aperiam corrupti nemo beatae natus laudantium eos.</h2>
            <a href="#about" className="card_link c_l">LEARN MORE</a>
          </div>
          <div className="card">
          <div className="about_icon"><AiFillWindows className='a_i'/></div>
            <h3 className="card_title">Smooth<br/>Workflow</h3>
            <h2 className="card_subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit perferendis quam tenetur impedit ut, molestias obcaecati error excepturi aperiam corrupti nemo beatae natus laudantium eos.</h2>
            <a href="#about" className="card_link">LEARN MORE</a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About