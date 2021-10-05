import React from "react";
import teamdetails from './teamdetails';
import Card from './Card';

function createCard(cardTerm){
    return(
        <Card 
            key={cardTerm.id}
            img={cardTerm.img}
            name={cardTerm.name}
            position={cardTerm.position}
            description={cardTerm.description}
        />
    );
}

function Team(){
    return(
        <div className="team_container my-10">
            <h1 className="text-3xl font-semibold text-pink-600 my-4">Meet The Team</h1>
           <div className="flex flex-wrap justify-around gap-3">{teamdetails.map(createCard)}</div>
        
        </div>
          

    );
}

export default Team;
