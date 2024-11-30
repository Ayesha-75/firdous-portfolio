import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div>
        <a className='footer-social-icons' href='https://www.linkedin.com/in/firdousayesha/' target='_blank'>
          <FaLinkedin size={25} />
        </a>
        <a className='footer-social-icons' href='https://github.com/Ayesha-75' target='_blank'>
          <FaGithub size={25} />
        </a>
        <a className='footer-social-icons' href='mailto: firdousayeshashaik123@gmail.com' target='_blank'>
          <IoMdMail size={25} />
        </a>
        <a className='footer-social-icons' href="https://wa.me/919966736187">
          <IoLogoWhatsapp size={25} />
        </a>
      </div>
      <p><FaRegCopyright className='cr-icon'/>2024 Firdous Ayesha. All rights reserved</p> 
      {/* <div className='copy-right'>
          <a href='#home'>
          <img src='https://res.cloudinary.com/dadtgoi5h/image/upload/v1732271896/anime-girl-programmer-working-code-project_1282444-263471_pgtdmz.avif'
          alt='icon'
          className='icon'/></a>
          <p className='copy-right-text'><FaRegCopyright className='cr-icon'/>2024 Firdous Ayesha. All rights reserved</p> 
      </div>
        <div className='footer-icons-container'>
        <div>
            <a href='https://github.com/Ayesha-75' target='_blank' className='git-anchor'>
              <img
              src='https://res.cloudinary.com/dadtgoi5h/image/upload/v1732274357/icons8-github_nsyxjc.svg'
              alt='github'
              className='git'
              />
            </a>
            </div>
            <a href='https://www.linkedin.com/in/firdousayesha/' target='_blank'>
              <img src='https://res.cloudinary.com/dadtgoi5h/image/upload/v1732273547/linkedin_1_cgawhn.svg'
              alt='linkedin'
              className='footer-linkedin' />
            </a>
            
            <div className='mail-anchor'>
            <a href='mailto: firdousayeshashaik123@gmail.com' target='_blank' >
              <img
              src='https://res.cloudinary.com/dadtgoi5h/image/upload/v1732273837/mail_1_cadmyx.svg'
              alt='mail'
              className='footer-mail'
              />
            </a>
            </div>
          
        </div>
        <p className='copy-right-text-sm'><FaRegCopyright className='cr-icon'/>2024 Firdous Ayesha. All rights reserved</p>  */}
    </div>
  )
}

export default Footer