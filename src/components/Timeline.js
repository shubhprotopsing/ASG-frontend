import timelineData from "../timelineData";
import TimelineItem from "./TimelineItem";
import React from 'react';
function Timeline() {
    if (timelineData.length>0) {
        return (
            <div>
               <h1 className="text-3xl font-semibold text-pink-600 mb-8">OUR WORK</h1>
            <div className="timeline-container">
          
            {timelineData.map((data, idx) => 
                <TimelineItem timelineData={data} key={idx} />
            )}
            </div>
            </div>
        )
    } else {
    return (
        <div>No Data Found</div> 
    )
    }
}

export default Timeline;