import React from "react";
import instagram_icon from '../images/instagram_icon.png';
import facebook_icon from '../images/facebook_icon.png';
import linkedin_icon from '../images/linkedin_icon.png';

function Footer(){
    return(
        <div className="flex flex-wrap  bg-pink-600 text-white py-12 px-5 lg:text-left justify-center gap-4  lg:gap-0 ">
        <div className="lg:w-1/2 flex flex-col gap-1 items-center lg:items-start">
            <div className="font-bold text-3xl ">A Sanitary Gift</div>
            <p>Thankyou for visiting our website! You can check out our social media handles to be updated with all our new ventures. Get in touch with us on any of these platforms for possible collaborations!</p>
            <div className="icon_container pt-2 flex gap-4">
              <img src={instagram_icon} className="h-7 w-7"></img>
              <img src={facebook_icon} className="h-7 w-7"></img>
              <img src={linkedin_icon} className="h-7 w-7"></img>

            </div>

        </div>
        <div className="flex flex-col gap-1 justify-center items-center lg:w-1/2">
            <h1 className="font-bold text-xl" >Navigate</h1>
            <div>Our Work</div>
            <div>Distribution Drives</div>
            <div>Meet the Team</div>
            <div>Our Achievements</div>
            
        </div>

        </div>
    );
}

export default Footer;