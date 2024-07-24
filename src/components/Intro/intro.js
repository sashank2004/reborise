import React from 'react'
import './intro.css';
import bg from '../../assets/landingimagesecond.png'
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id="intro">
      <div className='introContent'>
         <p className='hello'>ACHIEVE SUCCESS WITH #REBORISE</p>
         <span className='introText'>Turn Your<br/><span className='introName'>Idea's </span>Into <span className='introName'>Reality</span></span>
         <p className='introPara'>Your partner in business growth. From routine tasks<br/> to future planning, we've got you covered.</p>
         <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500}><button className='btn'><img className='btnImg' src={btnImg} alt="Hire me"/>Let's Connect</button></Link>

      </div>
      <img src={bg} alt="Profile" className="bg"/>
    </section>
  )
}

export default Intro;