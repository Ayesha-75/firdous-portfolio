import React, { useEffect } from 'react'
import './Projects.css'
import Aos from 'aos';
import 'aos/dist/aos.css'; 

const Projects = ({delay}) => {
    useEffect(() => {
        Aos.init();
      },[])
  return (
    <>
    <section id='projects'
    >
    <div className='p-container'>
    <h1 className='project-heading'>Projects</h1>
    <div className='project-container'>
    <div 
    data-aos="fade-up"
    data-aos-offset={delay}
    data-aos-delay={delay}
    data-aos-duration="750"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    >
        <article class="card">
            <header class="card__thumb">
                <a><img src="https://res.cloudinary.com/dadtgoi5h/image/upload/v1732555383/346343690-f7f7a77e-324d-4392-bc10-4a283cc2c9cd_lpjzfb.png"/></a>
            </header>
            {/* <date class="card__date">
              <span class="card__date__day">11</span>
                <br/>
                <span class="card__date__month">Jan</span>
            </date> */}
            <div class="card__body">
                <div class="card__category"><a href="#">Under Development</a></div>
                <h2 class="card__title"><a href="#">Notes Application</a></h2>
                {/* <div class="card__subtitle"></div> */}
                <ul className='list'>
                    <li className='list-item'>React JS</li>
                    <li className='list-item'>Express Js</li>
                    <li className='list-item'>HTML</li>
                    <li className='list-item'>CSS</li>
                </ul>
                <p class="card__description">Developing a responsive and user-friendly notes application using the MERN stack, enabling users to create, edit, and delete notes. Implemented secure user authentication, efficient CRUD operations. Focused on scalable backend architecture and dynamic front-end interactions.</p>
            </div>
            {/* <footer class="card__footer">
                <span class="icon ion-clock"></span> 10 mins ago
                <span class="icon ion-chatbox"></span><a href="#"> 145 comments</a>
            </footer> */}
        </article>
    </div>
    <div
    data-aos="fade-up"
    data-aos-offset={delay}
    data-aos-delay={delay}
    data-aos-duration="750"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    >
        <article class="card">
            <header class="card__thumb">
                <img className='image' src="https://res.cloudinary.com/dadtgoi5h/image/upload/v1731948049/job-board_hozlr7.png"/>
            </header>
            {/* <date class="card__date">
                <span class="card__date__day">11</span>
                <br/>
                <span class="card__date__month">Jan</span>
            </date> */}
            <div class="card__body">
            <div class="card__category">
                    <a href="https://firjobby.ccbp.tech/login" target='_blank'>View Live</a>
                </div>

                <h2 class="card__title"><a href="#">Job Board Application</a></h2>
                {/* <div class="card__subtitle">an ice cream sundae party！</div> */}
                <ul className='list'>
                    <li className='list-item'>React JS</li>
                    <li className='list-item'>React Router</li>
                    <li className='list-item'>HTML</li>
                    <li className='list-item'>CSS</li>
                </ul>
                <p class="card__description">Developed a frontend application for job listings, enabling users to search, filter by salary packages and job type, and view detailed job descriptions including location and key skills. Implemented secure authentication using JWT and integrated APIs for dynamic job data retrieval.</p>
                
            </div>
            {/* <footer class="card__footer">
                <button>
                    <a href="https://firnxtrendz.ccbp.tech/login" target='_blank'>View Live</a>
                </button>
                <button>
                    <a href="https://firnxtrendz.ccbp.tech/login" target='_blank'>View Live</a>
                </button>

            </footer> */}
        </article>
    </div>
    <div
    data-aos="fade-up"
    data-aos-offset={delay}
    data-aos-delay={delay}
    data-aos-duration="750"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    >
        <article class="card">
            <header class="card__thumb">
                <img className='image' src="https://res.cloudinary.com/dadtgoi5h/image/upload/v1731912580/nxt-trendz_jcdioq.png"/>
            </header>
            {/* <date class="card__date">
                <span class="card__date__day">11</span>
                <br/>
                <span class="card__date__month">Jan</span>
            </date> */}
            <div class="card__body">
            <div class="card__category">
                    <a href="https://firnxtrendz.ccbp.tech/login" target='_blank'>View Live</a>
                </div>

                <h2 class="card__title"><a href="#">E-commerce Application</a></h2>
                {/* <div class="card__subtitle">an ice cream sundae party！</div> */}
                <ul className='list'>
                    <li className='list-item'>React JS</li>
                    <li className='list-item'>React Router</li>
                    <li className='list-item'>HTML</li>
                    <li className='list-item'>CSS</li>
                </ul>
                <p class="card__description">Developed a frontend for an e-commerce platform where users can browse products and manage their shopping cart. Integrated APIs to fetch product data, implemented JWT-based authentication for secure user sessions, and utilized React Router for efficient navigation throughout the site.</p>
                
            </div>
            {/* <footer class="card__footer">
                <button>
                    <a href="https://firnxtrendz.ccbp.tech/login" target='_blank'>View Live</a>
                </button>
                <button>
                    <a href="https://firnxtrendz.ccbp.tech/login" target='_blank'>View Live</a>
                </button>

            </footer> */}
        </article>
    </div>
    <div
    data-aos="fade-up"
    data-aos-offset={delay}
    data-aos-delay={delay}
    data-aos-duration="750"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    >
        <article class="card">
            <header class="card__thumb">
                <a href="#"><img src="https://res.cloudinary.com/dadtgoi5h/image/upload/v1731948474/card-match-game_eumbo7.png"/></a>
            </header>
            {/* <date class="card__date">
                <span class="card__date__day">11</span>
                <br/>
                <span class="card__date__month">Jan</span>
            </date> */}
            <div class="card__body">
                <div class="card__category"><a href="https://afmatchgame.ccbp.tech/" target='_blank'>View Live</a></div>
                <h2 class="card__title"><a href="#">Match Card</a></h2>
                <ul className='list'>
                    <li className='list-item'>React JS</li>
                    <li className='list-item'>HTML</li>
                    <li className='list-item'>CSS</li>
                </ul>
                <p class="card__description">Created a frontend application for a card matching game, featuring interactive gameplay mechanics and a user-friendly interface. The application includes card flip functionality, matching logic, and a dynamic scoring system to enhance the gaming experience.</p>
            </div>
            {/* <footer class="card__footer">
                <span class="icon ion-clock"></span> 10 mins ago
                <span class="icon ion-chatbox"></span><a href="#"> 145 comments</a>
            </footer> */}
        </article>
    </div>
    <div
    data-aos="fade-up"
    data-aos-offset={delay}
    data-aos-delay={delay}
    data-aos-duration="750"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    >
        <article class="card">
            <header class="card__thumb">
                <a><img src="https://res.cloudinary.com/dadtgoi5h/image/upload/v1731948442/rock-paper-scissors_rjgdxh.png"/></a>
            </header>
            {/* <date class="card__date">
                <span class="card__date__day">11</span>
                <br/>
                <span class="card__date__month">Jan</span>
            </date> */}
            <div class="card__body">
                <div class="card__category"><a href="https://firocpaprsci.ccbp.tech/" target='_blank'>View Live</a></div>
                <h2 class="card__title"><a href="#">Rock Paper Scissors</a></h2>
                <ul className='list'>
                    <li className='list-item'>React JS</li>
                    <li className='list-item'>HTML</li>
                    <li className='list-item'>CSS</li>
                </ul>
                <p class="card__description">Created a frontend application for a Rock, Paper, Scissors game, featuring an interactive user interface and real-time gameplay. The application includes intuitive game mechanics, responsive design, and user feedback to enhance the gaming experience.</p>
            </div>
            {/* <footer class="card__footer">
                <span class="icon ion-clock"></span> 10 mins ago
                <span class="icon ion-chatbox"></span><a href="#"> 145 comments</a>
            </footer> */}
        </article>
    </div>
    <div data-aos="fade-up"
    data-aos-offset={delay}
    data-aos-delay={delay}
    data-aos-duration="750"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    >
        <article class="card">
            <header class="card__thumb">
                <a href="#"><img src="https://res.cloudinary.com/dadtgoi5h/image/upload/v1731948373/password-manager_bwjehj.png"/></a>
            </header>
            {/* <date class="card__date">
                <span class="card__date__day">11</span>
                <br/>
                <span class="card__date__month">Jan</span>
            </date> */}
            <div class="card__body">
                <div class="card__category"><a href="https://afpassmangr.ccbp.tech/">View Live</a></div>
                <h2 class="card__title"><a href="#">Password Manager</a></h2>
                <ul className='list'>
                    <li className='list-item'>React JS</li>
                    <li className='list-item'>HTML</li>
                    <li className='list-item'>CSS</li>
                </ul>
                <p class="card__description">Developed a simple password manager interface that allows users to input and store website credentials, including website name, username, and password. Features include password visibility toggle and a search functionality for filtering stored entries.</p>
            </div>
            {/* <footer class="card__footer">
                <span class="icon ion-clock"></span> 10 mins ago
                <span class="icon ion-chatbox"></span><a href="#"> 145 comments</a>
            </footer> */}
        </article>
    </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default Projects