import React from 'react'
import './contact.css'
import tele from '../../assets/tele.png'
import mail from '../../assets/email.png'

export const Contact = () => {
  return (
    <div className='contactSection' id='contact'>
        <div className="phone"><img src={tele}/><span>+212665432507</span></div>
        <div className="email"><img src={mail} /> <span>serhanabdelhakim6@gmail.com</span></div>
    </div>
  )
}
