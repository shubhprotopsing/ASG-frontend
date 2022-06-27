import React from 'react';

function Newscard(props){
    return(
      <div className="w-96 border-2 border-gray-300 rounded-lg relative flex-col justify-start items-start mb-20 p-4">

          
          <div className="card_content h-56 flex flex-col justify-start items-start bg-white">
                <div className="card_name font-bold font-sans text-xl text-left ">{props.headline}</div>
                
                <div className="card_description font-sans text-sm mt-1 leading-5 text-left h-40 mb-2">{props.description}</div>

            <div className="">
                {props.link && 
                    (<a href={props.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='font-light text-gray-600 no-underline hover:underline mt-2'>
                        {props.linktag + " >"}     
                    </a>)
                }
            </div>
          </div>
      </div>
    );
}

export default Newscard;