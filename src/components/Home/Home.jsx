import React from 'react'
// import { FaLinkedin } from "react-icons/fa";
// import Navbar from '../Navbar/Navbar'

import './Home.css'


const Home =() => {
  return (
    <>
    <section id='home'>
    <div className='profile-img-top'>
          <img src="https://res.cloudinary.com/dadtgoi5h/image/upload/v1732175394/portfolio-pic_vdsmjj.jpg"
          alt='profile'
          className='profile' />
      </div>
      <div className='home-container'>
      <div className='bg-container'>
        <p className='para-greet'>Hi, I am</p>
          <h1 className='heading-name'>Firdous Ayesha</h1>
          <div className='animated-text'>
            <p className='animated-para'>I am a <span className='sp-role'>Fullstack Developer</span></p>
          </div>
          <p className='intro'>
          I am a focused and dynamic individual, always eager to embrace new challenges with enthusiasm. Driven by a passion for learning and a commitment to excellence. With a growth-oriented mindset and a positive attitude, I am ready to make meaningful contributions and achieve remarkable milestones.
          </p>

          <div className='btn-container'>
            <a href='assets/Firdouss_Resume.pdf' target='_blank' >
                <button className='btn-resume'>View Resume</button> 
            </a>
            <a href='https://github.com/Ayesha-75' target='_blank'>
                <button className='btn-git'>View GitHub</button> 
            </a>
          </div>
          
      </div>

      <div className='profile-img'>
          <img src="https://res.cloudinary.com/dadtgoi5h/image/upload/v1732175394/portfolio-pic_vdsmjj.jpg"
          alt='profile'
          className='profile' />
      </div>
      </div>
    </section>
    
    </>
  )
  
}

export default Home