import React from 'react'
import './services.css'
import landing from '../../assets/landing.png'
import eco from '../../assets/ecommerce.png'
import port from '../../assets/portfolio.png'
import { motion } from 'framer-motion'

export const Services = () => {
  return (
    <>
    <div className='titleOfServiceSection' id='service'>Services.</div>
    <motion.div className='services'>
        <motion.div className="service" initial={{y:-70}} whileInView={{y:0}} transition={{duration:.3}} viewport={{once:true,amount:"all"}} >
            <img src={landing}  />
            <div className="titleOfService">Landing Page</div>
            <div className="description">I can build stunning landing pages and for sure responsive</div>
        </motion.div>
        <motion.div className="service" initial={{y:-70}} whileInView={{y:0}} transition={{duration:.5}} viewport={{once:true,amount:"all"}}>
            <img src={eco} />
            <div className="titleOfService">Ecommerce website</div>
            <div className="description">I can create ecommerce website which great user experience </div>
        </motion.div>
        <motion.div className="service" initial={{y:-70}} whileInView={{y:0}} transition={{duration:.7}} viewport={{once:true,amount:"all"}}>
            <img src={port} />
            <div className="titleOfService">Portfolio Website</div>
            <div className="description">Be diffrent and create own you're portfolio to get you're dream job</div>
        </motion.div>
    </motion.div>
    </>
)
}
