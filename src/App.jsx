import React from 'react'
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import Branch from './components/branch/branch'
import About from './components/about/about'
import Services from './components/services/services'
import Projects from './components/projects/projects'
import Testimonial from './components/testimonials/testimonial'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
 
export const App = () => {
  return (
    <div className='main app-container'>
    <Navbar/>
    <Header/>
    <Branch/>
    <About/>
    <Services/>
    <Projects/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </div>
  )
}
