import React from 'react';

function TimelineItem({timelineData}) {
    return(
        <div className="timeline-item relative flex justify-start mr-1 ml-1 mb-4 w-1/2">
            <div className="timeline-item-content flex-col relative text-sm p-2 bg-white transition-all duration-1000 ease-out" style={{borderColor: timelineData.category.color}}>
            
            
                <div className='tag uppercase text-gray-50 p-2 text-xs shadow-sm absolute top-1 rounded-lg' style={{borderColor: timelineData.category.color, backgroundColor: timelineData.category.color}}>
                    {timelineData.category.tag}
                </div>

                <time className='text-sm text-gray-700'>{timelineData.date}</time>
            
            
                <p className='w-2/3 leading-5 font-bold text-gray-700 m-5'>{timelineData.text}</p>

                {timelineData.link && 
                    (<a href={timelineData.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='font-light text-gray-600 no-underline hover:underline mt-2'>
                        {timelineData.link.text + " >"}     
                    </a>)
                }
            </div>
        </div>
    )
};

export default TimelineItem;








// import React from 'react';

// function TimelineItem({timelineData}) {
//     return(
//         <div className="timeline-item ">
//             <div className="timeline-item-content " style={{borderColor: timelineData.category.color}}>
//                 <span className='tag' style={{borderColor: timelineData.category.color, backgroundColor: timelineData.category.color}}>
//                     {timelineData.category.tag}
//                 </span>

//                 <time>{timelineData.date}</time>
//                 <p>{timelineData.text}</p>

//                 {timelineData.link && 
//                     (<a href={timelineData.link.url}
//                         target="_blank"
//                         rel="noopener noreferrer">
//                         {timelineData.link.text + " >"}     
//                     </a>)
//                 }
//             </div>
//         </div>
//     )
// };

// export default TimelineItem;