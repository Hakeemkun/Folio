import React from 'react'
import './skills.css'
import { motion } from 'framer-motion'
import html from '../../assets/html-5.png'
import css from "../../assets/css-3.png"
import js from "../../assets/js.png" 
import react from "../../assets/React-icon.png"
import arrow from "../../assets/arrow.png"

export const Skills = () => {
  const width=window.innerWidth
  return (
    <>
    <div className='skills' >
        <div className="header">What I'm good at.</div>
        <div className="skillsList">
            <div className="skill"><img src={html} /></div>
            <motion.div initial={{x:width<1250?0:-220,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:.5}} viewport={{once:false,amount:'all'}}  className="skill"><img src={css} /></motion.div>
            <motion.div initial={{x:width<1250?0:-480,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:.5}} viewport={{once:false,amount:'all'}}  className="skill"><img src={js} /></motion.div>
            <motion.div initial={{x:width<1250?0:-700,opacity:0}} transition={{duration:.5}} viewport={{once:false,amount:'all'}}  whileInView={{x:0,opacity:1}} className="skill"><img src={react} /></motion.div>
        </div>
    </div>
    <div className="arrow"><img src={arrow} /></div>
    <div className="about">
      
    </div>
    </>
  )
}
