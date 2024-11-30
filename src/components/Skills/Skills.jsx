import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import './Skills.css'

const skills = [
    {
      title: "Frontend",
      skills: [
        {
          skillId: "reactjs",
          skillName: "React Js",
          skillImageUrl: 'https://res.cloudinary.com/dadtgoi5h/image/upload/v1731476586/reactjs_logo_icon_206693_or2hva.webp',
          alt:'reactjs'
        },
        // {
        //   skillId: "tailwind",
        //   skillName: "Tailwind",
        //   skillImageUrl: tailwindIcon,
        // },
        {
          skillId: "html",
          skillName: "HTML",
          skillImageUrl: "https://res.cloudinary.com/dadtgoi5h/image/upload/v1731478447/html-5-svgrepo-com_n5mu3z.svg",
          alt:'html'
        },
        {
          skillId: "css",
          skillName: "CSS",
          skillImageUrl: 'https://res.cloudinary.com/dadtgoi5h/image/upload/v1731478618/css-3-svgrepo-com_vy36hz.svg',
          alt:'css'
        },
        {
          skillId: "javascript",
          skillName: "JavaScript",
          skillImageUrl: 'https://res.cloudinary.com/dadtgoi5h/image/upload/v1731478825/javascript-svgrepo-com_g7ovyn.svg',
          alt:'javascript'
        },
        {
          skillId: "bootstrap",
          skillName: "Bootstrap",
          skillImageUrl: 'https://res.cloudinary.com/dadtgoi5h/image/upload/v1731478842/bootstrap-4-logo-svgrepo-com_thitju.svg',
          alt:'bootstrap'
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          skillId: "nodejs",
          skillName: "Node Js",
          skillImageUrl: 'https://res.cloudinary.com/dadtgoi5h/image/upload/v1731480578/node-js-svgrepo-com_rm54di.svg',
          alt:'nodejs',
        },
        {
          skillId: "expressjs",
          skillName: "Express Js",
          skillImageUrl: 'https://res.cloudinary.com/dadtgoi5h/image/upload/v1731480928/expressjs-icon_yx7j5q.svg',
          alt:'expressjs',
        },
        {
          skillId: "python",
          skillName: "Python",
          skillImageUrl: 'https://res.cloudinary.com/dadtgoi5h/image/upload/v1731481514/python-svgrepo-com_gb6eob.svg',
          alt:'python'
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          skillId: "sqlite",
          skillName: "SQLite",
          skillImageUrl: 'https://res.cloudinary.com/dadtgoi5h/image/upload/v1731481635/sqlite-svgrepo-com_fdaxqp.svg',
          alt:'sqlite'
        },
        {
          skillId: "mysql",
          skillName: "MySQL",
          skillImageUrl: 'https://res.cloudinary.com/dadtgoi5h/image/upload/v1731481671/mysql-logo-svgrepo-com_ddo6gq.svg',
          alt:'mysql'
        },
        // {
        //   skillId: "mongodb",
        //   skillName: "Mongo DB",
        //   skillImageUrl: mongodbIcon,
        // },
      ],
    },
    {
      title: "Others",
      skills: [
        {
          skillId: "git",
          skillName: "Git",
          skillImageUrl: 'https://res.cloudinary.com/dadtgoi5h/image/upload/v1731481603/git-svgrepo-com_hmqpw3.svg',
          alt:'git'
        },
        {
          skillId: "github",
          skillName: "GitHub",
          skillImageUrl: 'https://res.cloudinary.com/dadtgoi5h/image/upload/v1731481620/github-142-svgrepo-com_kzodun.svg',
          alt:'github'
        },
        {
          skillId: "vscode",
          skillName: "VSCode",
          skillImageUrl: 'https://res.cloudinary.com/dadtgoi5h/image/upload/v1731481653/vscode-svgrepo-com_e3oncs.svg',
          alt:'vscode'
        },
        {
          skillId: "postman",
          skillName: "Postman",
          skillImageUrl: 'https://res.cloudinary.com/dadtgoi5h/image/upload/v1731480947/postman-icon-svgrepo-com_pmx2ck.svg',
          alt:'postman'
        },
      ],
    },
  ];

const SkillCategory = ({category,delay}) => (
    <div className='skill-box-container'
    data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay={delay}
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    >
        <h1 className='heading'>{category.title}</h1>
        <div className='item-db'>
            {category.skills.map(eachSkill => (
                    <div className='skill-btn'>
                        <img src={eachSkill.skillImageUrl}
                            alt={eachSkill.skillName}
                            className='logo'
                        />
                        <span className='span-name'>{eachSkill.skillName}</span>
                    </div>
                ))}
        </div>
    </div>
)

const Skills = () => {
  useEffect(() => {
    Aos.init();
  },[])
    return (
        <>
        <section id='skills' className='skill-con'>
        <h1 className='skill-heading'>Skills</h1>
            <div className='container'>
                {skills.map(each => (
                    <SkillCategory
                        key={each.title}
                        category={each}
                    />
                ))}
            </div>
        </section>
        </>
    )
}

export default Skills