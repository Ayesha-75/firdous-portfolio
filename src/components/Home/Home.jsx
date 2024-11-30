import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import './Home.css'


const Home =() => {
  useEffect(() => {
    Aos.init();
  },[])
  return (
    <>
     <section id='home'>
      <div className='home-container'>
        <div className='word-container'
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="750"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        >
          <p className='para-greet'>Hey there! It's</p>
          <p className='heading-name'>Firdous Ayesha</p>
        <p className='para-role'>and I'm a Fullstack Developer</p>
        </div>
        
      </div>
     </section>
    </>
  )
  
}

export default Home