import timelineData from "../timelineData";
import TimelineItem from "./TimelineItem";
import React from 'react';
function Timeline() {
    if (timelineData.length>0) {
        return (
            <div className="timeline-container">
            {timelineData.map((data, idx) => 
                <TimelineItem timelineData={data} key={idx} />
            )}
            </div>
        )
    } else {
    return (
        <div>No Data Found</div> 
    )
    }
}

export default Timeline;