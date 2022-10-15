import React from 'react'
import './branch.css'

import {FaPhoenixFramework, FaDigg} from 'react-icons/fa'
import {SiDrupal, SiFirefox, SiAltiumdesigner, SiWorldhealthorganization} from 'react-icons/si'

const Branch = () => {
  return (
    <section className='branch section'>
      <div className="brach_container container grid">
        <div className="b_logos"><FaPhoenixFramework className='b_l'/></div>
        <div className="b_logos"><FaDigg className='b_l'/></div>
        <div className="b_logos"><SiDrupal className='b_l'/></div>
        <div className="b_logos"><SiFirefox className='b_l'/></div>
        <div className="b_logos"><SiAltiumdesigner className='b_l'/></div>
        <div className="b_logos"><SiWorldhealthorganization className='b_l'/></div>
      </div>
    </section>
  )
}

export default Branch