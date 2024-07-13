import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id="skills">
       <span className='skillTitle'>
         What I do
       </span>
       <span className='skillDesc'>
         I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.
       </span>
       <div className='skillBars'>
        <div className='skillBar'>
          <img src={UIDesign} alt="UIDesign" className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>Frontend Design</h2>
            <p>HTML, CSS, Javascript, React, MaterialUI</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={WebDesign} alt="Backend-Design" className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>Backend Server</h2>
            <p>Node.js, express, recoil</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={AppDesign} alt="Storage" className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>Databases</h2>
            <p>MongoDB</p>
          </div>
        </div>
       </div>
    </section>
  )
}

export default Skills