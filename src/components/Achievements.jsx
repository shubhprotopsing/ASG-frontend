import React from "react";
import Newscard from './Newscard';
import newsdetails from "./newsdetails";

function createNewsCard(cardTerm){
    return(
        <Newscard 
            key={cardTerm.id}
            headline={cardTerm.headline}
            description={cardTerm.description}
            link={cardTerm.link}
            linktag={cardTerm.linktag}
        />
    );
}

function Achievements(){
    return(
        <div className="team_container my-10">
            <h1 className="text-3xl font-semibold text-pink-600 my-4">Our Achievements</h1>
           <div className="flex flex-wrap justify-around gap-3">{newsdetails.map(createNewsCard)}</div>
        
        </div>
          

    );
}

export default Achievements;