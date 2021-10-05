import React, { useState } from 'react';
import './Navicon.css';



 function Navicon(){

   const [clickStatus,setClickStatus] = useState(false)
   function updateStatus() {
      setClickStatus(!clickStatus);
      }


  return(
    <div>
      <button onClick={updateStatus} className={`nav__icon ${clickStatus ? "open" : null}  h-8 flex justify-center items-center cursor-pointer absolute z-10 top-8 right-8 `}>
        <div className=" nav__icon__burger"></div>
      </button>

      <div className={`navbar__menu ${clickStatus ? "open" : null} bg-white absolute top-0 right-0 h-96 w-96 flex flex-col justify-start items-center gap-8 font-semibold `}>
        <div>Hall Of Fame</div>
        <div>Our Posts</div>
        <div>Meet The Team</div>
        <div>Distribution Drives</div>
        <div>Contact Us</div>
        
      </div>
    </div>
      );
 }
 export default Navicon;