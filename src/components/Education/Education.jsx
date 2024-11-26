import React from 'react'
import TimelineView from '../TimelineView/TimelineView';
import './Education.css'

const educationList = [
    {
      id: "nxtwave",
      title: "Full Stack Development with MERN Specialization",
      institution: "NxtWave",
      duration: "February 2023 - May 2024",
      location: "Online",
      highlights: [
        "Developed front-end and back-end applications using React JS, Node JS, and Express JS",
        "Gained practical experience with SQLite for database management",
      ],
      logoUrl: "src/assets/nxtwave-logo.jpeg",
      grade: "9.6 CGPA",
    },
    {
      id: "btech",
      title: "Bachelor of Technology",
      institution: "Gokaraju Rangaraju Institute of Engineering and Technology",
      duration: "August 2019 - January 2023",
      location: "Hyderabad, Telangana, India",
      highlights: [
        "Focused on core subjects",
        
      ],
      grade: "8.6 CGPA",
    },
    {
      id: "intermediate",
      title: "+2 in Maths, Physics, and Chemistry",
      institution: "Sree Chaitanya Junior College",
      duration: "June 2017 - March 2019",
      location: "Khammam, Telangana, India",
      highlights: [
        "Focused on core subjects: Mathematics, Physics, and Chemistry",
      ],
      grade: "9.4 GPA",
    },
    {
      id: "highschool",
      title: "10th Grade",
      institution: "Indo English High School",
      duration: "June 2016 - March 2017",
      location: "Khammam, Telangana, India",
      highlights: [
        "Completed a broad curriculum including Telugu, Hindi, English, Mathematics, Physics, Biology, Chemistry, and Social Studies",
      ],
      grade: "9.7 GPA",
    },
  ];

const Education = () => {
    
  return (
    <section id='education'>
        <h1 className='ed-heading'>Education</h1>
        <TimelineView timelineDetails={educationList} />
    </section>
  )
}

export default Education