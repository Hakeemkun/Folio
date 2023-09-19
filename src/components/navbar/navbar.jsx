import React, { useEffect, useState } from 'react'
import './navbar.css'
import { List } from 'phosphor-react'
import { motion } from 'framer-motion'

export const Navbar = () => {

    const [navOnScroll,setNavOnScroll]=useState(false)

    useEffect(()=>{
      const handleScroll=()=>{
        if(window.scrollY>20){
          setNavOnScroll(true)
        }
        else{
          setNavOnScroll(false)
        }
      }

      window.addEventListener('scroll',handleScroll)
      return()=>{
        window.removeEventListener('scrll',handleScroll)
      }
    })

    const [toggleValue,setToggle]=useState(false)
    console.log(toggleValue)
  return (
    <div className="navContain" style={{background:navOnScroll?'white':'rgba(0, 0, 0, 0)',height:toggleValue?"100vh":"90px"}}>
    <div className='navbar' >
        <div className="logo"><a href="/Folio/">Hakeem.</a></div>
        <div className="menu">
            <div className="menuItem"><a href="#projects">Projects</a></div>
            <div className="menuItem"><a href="#service">Services</a></div>
            <div className="menuItem contact"><a href="#contact">Contact</a></div>

        </div>
        <div className="burger" onClick={()=>{setToggle(!toggleValue)}}><List size={32}></List></div>
        <motion.div className="toggledMenu" style={{bottom:toggleValue?0:"100vh",animation:toggleValue?'fadein .5s':'fadeout .7s',display:toggleValue?"flex":"none"}} >
            <div className="toggledItem"><a href="#projects" onClick={()=>{setToggle(false)}}>Projects</a></div>
            <div className="toggledItem"><a href="#service" onClick={()=>{setToggle(false)}}>Services</a></div>
            <div className="toggledItem"><a href="#contact" onClick={()=>{setToggle(false)}}>Contact</a></div>
            <div className="close" onClick={()=>{setToggle(false)}} > &times;</div>
        </motion.div>
    </div>
    </div>
  )
}
