import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import './TimelineView.css'
import TimelineCard from "../TimelineCard/TimelineCard";

const TimelineView =(props) => {
    const {timelineDetails} = props
    
    return(
        <>
            <VerticalTimeline>
                {timelineDetails.map(each => (
                    <TimelineCard cardDetails ={each} key={each.id}/>
                ))}
            </VerticalTimeline>
            
        </>

    )
}


export default TimelineView