import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id="skills">
       <span className='skillTitle'>
         What we do
       </span>
       <span className='skillDesc'>
       We Provide Exclusive Service For <span className='yourbussiness'>Your Business</span> 
       </span>
       <br/>
       <button className='services-button'>VIEW ALL SERVICES </button>
    </section>
  )
}

export default Skills