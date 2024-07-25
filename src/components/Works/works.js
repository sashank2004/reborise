import React from 'react'
import './works.css'
import quote from '../../assets/quoteoftheday.png'
import courseSelling from '../../assets/courseselling.png'
import Amazon from '../../assets/Amazon.png'
import youtubeClone from '../../assets/youtubeclone.png'
import RockPaperScissor from '../../assets/rockpaperscissor.png'


const Works = () => {
  return (
    <section id="works">
      <span className='ourprocess'>Our Process</span>
      <h2 className='worksTitle'>How We <span className='work'>Work!</span></h2>
      <div className='worksImgs'>
        <div className='worksImg'>
          <span className='heading'>Discover & Assessment</span>
          <span>Identify your needs and <br/>evaluate project requirements<br/> comprehensively.</span>
        </div>
        <div className='worksImg'>
        <span className='heading'>Design & Planning</span>
        <span>Create detailed plans and<br/> design tailored to your<br/> objectives.</span>
        </div>
        <div className='worksImg'>
        <span className='heading'>Develop & Implementation</span>
        <span>Build and integrate solutions<br/> according to the agreed plan.</span>
        </div>
        <div className='worksImg'>
        <span className='heading'>Deliver & Support</span>
        <span>Finalize the project and offer<br/> continuous support and<br/> maintenance.</span>
        </div>
      </div>
    </section>
  )
}

export default Works