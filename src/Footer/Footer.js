import React from 'react'
import '../Home/Home.scss'
import linkedin from '../assets/images/linkedin.svg'
import behance from '../assets/images/behance.svg'
import gmail from '../assets/images/gmail.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='contact-title'>Contact</div>
            <div className='social-icons'>
                <span> <img src={linkedin} /> thesanjayarora </span>
                <span> <img src={behance} /> sanjuarora </span>
                <span> <img src={gmail} /> arora5971@gmail.com </span>
            </div>
        </div>
    </div>
  )
}

export default Footer