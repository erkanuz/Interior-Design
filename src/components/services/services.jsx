import React from 'react'
import './services.css'

import TE from '../../assets/5.svg'

const Services = () => {
  return (
    <section className='services section container' id='services'>
        <div className="services_container grid">

        <img src={TE} alt='te' className='services_img img'/>

        <div className="proj_data">
            <h2 className="proj_title">We believe that a team <br/>makes any project<br/> better</h2>
            <p className="proj_description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit perferendis quam tenetur impedit ut, molestias obcaecati error excepturi aperiam corrupti nemo.</p>
            <button className="services_button">DISCOVER NOW</button>
        </div>

        </div>
    </section>
  )
}

export default Services