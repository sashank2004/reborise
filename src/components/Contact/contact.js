import React, { useRef } from 'react'
import './contact.css'
import Techplement from '../../assets/techplementLogo.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7dvfrvd', 'template_bpp7h2j', form.current, {
        publicKey: '-WnnUukE4f2mtW4mT',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent!')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id='contactPage'>
      <div id="experience">
        <h1 className='contactPageTitle'>My Experience</h1>
        <p className='experienceDesc'>
          I have experience working as a full stack web developer intern in below mentioned companies.
        </p>
        <div className='experienceImgs'>
          <a href="https://www.linkedin.com/company/techplement/mycompany/verification/">
          <img src={Techplement} alt="Techplement" className='experienceImg'/>
          </a>
        </div>
      </div>
      <div id="contact">
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
           <input type="text" className='name' placeholder='Your Name' name='your_name'/>
           <input type="email" className='email' placeholder='Your Email' name='your_email'/>
           <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
           <button type="submit" value="send" className='submitBtn'>Submit</button>
           <div className='links'>
             <img src={FacebookIcon} alt="FacebookIcon" className='link'/>
             <img src={TwitterIcon} alt="TwitterIcon" className='link'/>
             <img src={YoutubeIcon} alt="YoutubeIcon" className='link'/>
             <img src={InstagramIcon} alt="InstagramIcon" className='link'/>
           </div>
        </form>
      </div>
    </section>
  )
}

export default Contact;