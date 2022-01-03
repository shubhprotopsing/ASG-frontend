import React from 'react';

function TimelineItem({timelineData}) {
    return(
        <div className="timeline-item">
            <div className="timeline-item-content" style={{borderColor: timelineData.category.color}}>
                <span className='tag' style={{borderColor: timelineData.category.color, backgroundColor: timelineData.category.color}}>
                    {timelineData.category.tag}
                </span>

                <time>{timelineData.date}</time>
                <p>{timelineData.text}</p>

                {timelineData.link && 
                    (<a href={timelineData.link.url}
                        target="_blank"
                        rel="noopener noreferrer">
                        {timelineData.link.text + " >"}     
                    </a>)
                }
            </div>
        </div>
    )
};

export default TimelineItem;