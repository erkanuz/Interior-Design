import React from 'react'
import './projects.css'

import PR from '../../assets/4.svg'

const Projects = () => {
  return (
    <section className="projects section container" id='project'>
        <div className="proj_container grid">

        <img src={PR} alt='te' className='proj_img img'/>

        <div className="proj_data">
            <h2 className="proj_title">Simple way to make <br/>stylish living room</h2>
            <p className="proj_description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit perferendis quam tenetur impedit ut, molestias obcaecati error excepturi aperiam corrupti nemo.</p>
            <div className="proj_box">
              <div className="box">
                <h3 className="box_title">15</h3>
                <span className="box_subtitle">Consecteture<br/>brand</span>
              </div>
              <div className="box">
                <h3 className="box_title">350</h3>
                <span className="box_subtitle">Consecteture<br/>brand</span>
              </div>
              <div className="box">
                <h3 className="box_title">25</h3>
                <span className="box_subtitle">Consecteture<br/>brand</span>
              </div>
            </div>
            <button className="proj_button">DISCOVER NOW</button>
        </div>

        </div>
    </section>
  )
}

export default Projects