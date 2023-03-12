import React from "react";

function Header () {

  return (
    <header>
      <nav className="hidden">
      <ul>
           <li><a href= "#about-me"><button>About Me</button></a></li>
           <li><a href="#creative-work"><button> Creative Work</button></a></li>
           <li><a href= "#projects"><button>Projects</button></a></li>
           <li><a href= "#contact-me"><button>Contact Me</button></a></li>
        </ul>
     </nav>


    </header>
  );
};

export default Header;