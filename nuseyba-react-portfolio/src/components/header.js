import React, { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

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

      {/* Toggle button */}
      <button onClick={handleToggle} className="hidden">
      </button>
    </header>
  );
};

export default Header;