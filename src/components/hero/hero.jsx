import React from 'react'
import './hero.css'
import pic2 from '../../assets/pic2.jpeg'
import triangle from '../../assets/triangle.png'
import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <>
    <div className='hero'>
        <motion.div className="pic"
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{duration:.5}}
         ><img src={pic2} /></motion.div>
        <div className="heroContent">
            <motion.div initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:.3}}  className="bigTitleHero">Hi,I make websites </motion.div>
            <motion.div initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:.8}} className="smallTitleHero">Get you're digital presence to the next level</motion.div>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className='callToActionButton'><a href="#projects">View Works</a></motion.div>
        </div>
    </div>
    <motion.div  className="heroCurve" ></motion.div>
    <div className="dotes"><img src={triangle} /></div>
    </>
  )
}
