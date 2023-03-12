import React from "react";
import ProfilePicture from "../img/Nuseyba Kenadid.png"


function Header () {

  return (
    <div class="container">
    <h1>Nuseyba Kenadid</h1>
    <img src={ProfilePicture} alt="photo of Nuseyba Kenadid"></img>  
   <nav class ='topnav'>
      <ul>
         <li><a href= "#about-me"><button>About Me</button></a></li>
         <li><a href="#creative-work"><button> Creative Work</button></a></li>
         <li><a href= "#projects"><button>Projects</button></a></li>
         <li><a href= "#contact-me"><button>Contact Me</button></a></li>
      </ul>
   </nav>
 </div>
  );
};

export default Header;