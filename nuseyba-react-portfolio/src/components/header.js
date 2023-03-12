import React from "react";
import ProfilePicture from "../img/Nuseyba Kenadid.png";
import { Link } from "react-router-dom";

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

export default Header;
