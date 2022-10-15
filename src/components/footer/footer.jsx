import React from 'react'
import './footer.css'

import {FaPhoneAlt} from 'react-icons/fa'
import {BsIntersect} from 'react-icons/bs'
import {MdOutlineMarkEmailRead} from 'react-icons/md'

const Footer = () => {
  return (
    <section className='foooter section'>
      <div className="footer_container container grid">
        <div className="footer_content">
          <h2 className="main_title"><BsIntersect/>INTERIOR DESIGN</h2>
          <p className='f_des'>San Bruno, CA, USA</p>
          <p className='f_des'>Everthing you want is here !</p>
        </div>
        <div className="footer_content">
          <h2 className="main_title">About us</h2>
          <ul className="footer_links">
            <li><a href="#a" className="footer_link a">Pricing</a></li>
            <li><a href="#a" className="footer_link a">Discounts</a></li>
            <li><a href="#a" className="footer_link a">Report a bug</a></li>
            <li><a href="#a" className="footer_link a">Terms of Services</a></li>
          </ul>
        </div>
        <div className="footer_content">
        <h2 className="main_title">Community</h2>
          <ul className="footer_links">
            <li><a href="#a" className="footer_link a">Support</a></li>
            <li><a href="#a" className="footer_link a">Questions</a></li>
            <li><a href="#a" className="footer_link a">Get in touch</a></li>
            <li><a href="#a" className="footer_link a">Customer help</a></li>
          </ul>
        </div>
        <div className="footer_content fcont">
        <h2 className="main_title">Contacts</h2>
          <span className='f_des'><FaPhoneAlt/> - 1234567890 </span>
          <span className="f_des"><MdOutlineMarkEmailRead/> - paprica@gmail.com</span>
        </div>
      </div>
      <p className="footer_copy">&#169; Erkan Uz. All right reserved</p>
    </section>
  )
}

export default Footer