import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
      <div>
        <nav>
          <button>
            <Link to="/about">About Me!!!</Link>
          </button>
          <button>
            <Link to="/projects">Projects</Link>
          </button>
          <button>
            <Link to="/contact">Contact Me</Link>
          </button>
        </nav>
      </div>
    );
  }
  
  export default Navbar;
  