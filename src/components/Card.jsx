import React from 'react';

function Card(props){
    return(
      <div className="h-80 w-80 border-2 border-gray-300 rounded-lg relative flex-col justify-start items-center mb-20">

          <div className="card_header h-36 bg-gradient-to-b from-pink-600 to-white rounded-t-md flex justify-center items-center">
          <img src= {props.img} className="rounded-full h-20 w-24" />
          </div>
          <div className="card_content flex flex-col justify-start items-center bg-white">
                <div className="card_name font-black text-lg ">{props.name}</div>
                <div className="card_position font-medium text-base text-gray-500">{props.position}</div>
                <div className="card_description text-xs p-6">{props.description}</div>
          </div>
      </div>
    );
}

export default Card;