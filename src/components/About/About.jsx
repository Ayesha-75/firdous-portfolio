import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id='about'>
    <div className='about-container'>
      <div className='about-container-alignment'>
        <div className='profile-img-top'>
            <img src="https://res.cloudinary.com/dadtgoi5h/image/upload/v1732859884/portfolio-pic-bw_yt1kjq.jpg"
            alt='profile'
            className='profile' />
        </div>
        <div className='about-intro'>
        <h1 className='about-me-heading'>ABOUT ME</h1>
          <hr className='hr-line'/>
          <p>Hey, this is Firdous Ayesha, an aspiring Fullstack developer passinate in creating scalable, user-centric applications. With a knack for clean code and a love for solving real-world problems, I'm excited to bring ideas to life through technology. I am a focused and dynamic individual, always eager to embrace new challenges with enthusiasm. Driven by a passion for learning and a commitment to excellence. With a growth-oriented mindset and a positive attitude, I am ready to make meaningful contributions and achieve remarkable milestones.</p>
          <a href='https://drive.google.com/file/d/1OIJ6dwss4veSgFoDhM_CaU57e9PRoeRZ/view?usp=sharing' target='_blank' rel="noopener noreferrer" >
              <button className='btn-resume'>View Resume</button> 
          </a>
        </div>

      </div>
    </div>
    </section>
  )
}

export default About