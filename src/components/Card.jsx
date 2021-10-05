import React from 'react';

function Card(props){
    
    return(
      <div className="h-80 w-80  border-2 border-gray-300 rounded-lg relative ">

          <div className="card_header   h-24 bg-pink-600 rounded-t-md "></div>
          <img src= {props.img} className="rounded-full h-20 w-24 absolute top-12 left-28" />
          <div className="card_content flex flex-col justify-start items-center bg-white absolute top-40">
                <div className="card_name font-black text-lg ">{props.name}</div>
                <div className="card_position font-medium text-base text-gray-500">{props.position}</div>
                <div className="card_description text-xs">{props.description}</div>
          </div>
      </div>
    );
}

export default Card;