import React from "react";
import ProfilePicture from "../img/Nuseyba Kenadid.png";

const styles = {
  container: {
    width: "20%",
    borderRadius: "60%",
  },

  topnav: {
    position: "fixed",
    width: "25%",
    display: "inline",
    textAlign: "end",
    right: "0",
    zIndex: "99",
  },

};


function Header() {

  return (
    <div>
      <h1>Nuseyba Kenadid</h1>
      <img
        src={ProfilePicture}
        style={styles.container}
        alt="Nuseyba Kenadid"
      ></img>
      <nav style={styles.topnav}>
        <ul>
          <li>
            <a href="#about-me">
              <button>About Me</button>
            </a>
          </li>
          <li>
            <a href="#creative-work">
              <button> Creative Work</button>
            </a>
          </li>
          <li>
            <a href="#projects">
              <button>Projects</button>
            </a>
          </li>
          <li>
            <a href="#contact-me">
              <button>Contact Me</button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
