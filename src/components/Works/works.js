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
      <h2 className='worksTitle'>My Portfolio</h2>
      <span className='worksDesc'>I have worked on several projects, have a look at some of them. </span>
      <div className='worksImgs'>
      <a href="https://drive.google.com/file/d/1iqKta1himbCwiGD6Fp2-kVvppbIKOIh1/view?usp=sharing">
        <img src={courseSelling} alt="" className='worksImg'/>
        </a>
        <a href="https://www.linkedin.com/posts/sashank-singh-3a46a6247_techplement-techplementteam-techplementinternship-activity-7213611893310046208-gnuo?utm_source=share&utm_medium=member_desktop">
        <img src={quote} alt="" className='worksImg'/>
        </a>
        <a href="https://sashank2004.github.io/amazonclone/">
        <img src={Amazon} alt="" className='worksImg'/>
        </a>
        <a href="https://sashank2004.github.io/rock-paper-scissors-game/">
        <img src={RockPaperScissor} alt="" className='worksImg'/>
        </a>
        <a href="https://sashank2004.github.io/youtubefrontpage/">
        <img src={youtubeClone} alt="" className='worksImg'/>
        </a>
      </div>
      <button className='workBtn'>See More</button>
    </section>
  )
}

export default Works