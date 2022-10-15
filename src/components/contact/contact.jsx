import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section className='subscribe' id='contact'>
        <div className="subscribe_container container">
            <h2 className="subs_title">Subscribe to our Newsletter</h2>
            <p className="subs_description">Loremipsum dolor sit amet consectetur adipisicing elit. Odit perferendis quam tenetur impedit ut, molestias obcaecati error excepturi aperiam laudantium.</p>
        
            <form action="" className="subs_form">
                <input type="text" placeholder='Enter email' className="subs_input" />
                <button className="subs_button">Subscribe</button>
            </form>
        </div>
    </section>
  )
}

export default Contact