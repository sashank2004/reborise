import React, { useState } from 'react'
import './navbar.css';
import logo from "../../assets/reboriselogoplusname.png";
import contactImg from "../../assets/contact.png";
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png'


const Navbar = () => {
  const [showMenu,setShowMenu]=useState(false);
  return (
    <nav className="navbar">
     <img src={logo} alt="Logo" className="logo"/>
     <div className="desktopMenu">
       <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
       <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About Us</Link>
       <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Services</Link>
       <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Insights</Link>
     </div>
     <button className="desktopMenuBtn" onClick={
      ()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
      }
     }>
      <img src={contactImg} alt="" className="desktopMenuImg" />Contact Us
     </button>

     <img src={menu} alt="Menu" className="mobMenu" onClick={
        ()=>{
          setShowMenu(!showMenu)
        }
       }/>
     <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
       <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={
        ()=>{
          setShowMenu(false)
        }
       }>Home</Link>
       <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={
        ()=>{
          setShowMenu(false)
        }
       }>About Us</Link>
       <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={
        ()=>{
          setShowMenu(false)
        }
       }>Services</Link>
       <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={
        ()=>{
          setShowMenu(false)
        }
       }>Insights</Link>
       <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={
        ()=>{
          setShowMenu(false)
        }
       }>Contact Us</Link>
     </div>
    </nav>
  )
}

export default Navbar