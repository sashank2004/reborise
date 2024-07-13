import React from 'react'
import './intro.css';
import bg from '../../assets/profilepic.png'
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id="intro">
      <div className='introContent'>
         <span className='hello'>Hello</span>
         <span className='introText'>I'm <span className='introName'>Sashank</span><br/>Website Designer</span>
         <p className='introPara'>I am a skilled web designer with experience in creating <br/> visually appealing and user friendly websites</p>
         <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500}><button className='btn'><img className='btnImg' src={btnImg} alt="Hire me"/>Hire Me</button></Link>

      </div>
      <img src={bg} alt="Profile" className="bg"/>
    </section>
  )
}

export default Intro;