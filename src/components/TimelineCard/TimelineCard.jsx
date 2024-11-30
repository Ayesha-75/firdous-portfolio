import React from 'react'
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { FaGraduationCap } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import './TimelineCard.css';

const TimelineCard = (props) => {
    const {cardDetails} = props
    const {title,institution,duration,location,highlights,grade} = cardDetails
  return (
    <>
      <VerticalTimelineElement
      className='education-container'
      date ={duration}
      iconStyle={{ backgroundColor:"#ffffff" }}
      icon ={
        <FaGraduationCap style={{
            fill:"black"
        }}/>
      }
      >
        <div className='e-cont'>
        <h1 className='title-heading'>{title}</h1>
        <h3 className='institution'>{institution}</h3>
        <h5 className='location'>{location}</h5>
        <ul className='list-items'>
            {highlights.map(each => (
                <li key={each}>{each}</li>
            ))}
        </ul>
        <h5 className='grade'>Grade: {grade}</h5>
        </div>
        </VerticalTimelineElement>  
    </>
  )
}

export default TimelineCard