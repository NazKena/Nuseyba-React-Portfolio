import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
      <div>
        <Navbar/>
        <h1>Nuseyba Kenadid</h1>
        <nav>
          <button>
            <Link to="About">About Me</Link>
          </button>
          <button>
            <Link to="Projects">Projects</Link>
          </button>
          <button>
            <Link to="Contact">Contact Me</Link>
          </button>
        </nav>
      </div>
    );
  }
  
  export default Navbar;
  