import React from "react";
import NoteTakerImg from "../img/Screenshot 2023-03-07 at 19.52.44.png";
import PassGenImg from "../img/127.0.0.1_5500_Develop_index.html.jpeg";
import ProfileGenImg from "../img/Screenshot 2023-03-01 at 13.32.34.png";
import VimGalleryImg from "../img/Screenshot 2023-03-11 at 16.47.01.png";
import Navbar from "./navbar"
import Footer from "./footer";


const styles = {
  row: {
    display: "flex",
    flexDirection: "row",
  },

  creativeWork: {
    width: "30%",
    borderRadius: "1%",
  },
  }
function Projects() {

  return (
    <div>
    <div id="creative-work">
      <h2>Creative Work</h2>
      <p>
        Here I will include my services as well as outlets that serve to
        showcase my creative skills. Click on each application to be taken 
      </p>
      <div class="row">
          <h3>Note Taker</h3>
          <a href="https://herokus-note-taker.herokuapp.com/">
            <img
              src={NoteTakerImg}
              style ={styles.creativeWork}
              alt = "Screenshot  of Note Taker"              
            />
          </a>
          <p><a href="https://github.com/NazKena/Note_Taker">GitHub Link</a></p>


          <h3>Password Generator</h3>
          <a href="https://nazkena.github.io/JavaPassGen/">
          <img
            src={PassGenImg}
            style={styles.creativeWork}
            alt="Password Generator"
          ></img>
          </a>
          <p><a href="https://github.com/NazKena/JavaPassGen">GitHub Link</a></p>


          <h3>Vim Gallery</h3>
          <a href="https://bondt1.github.io/Project-1-Vim-Gallery/">
          <img
            src={VimGalleryImg}
            style={styles.creativeWork}
            alt="Vim Gallery Screenshot"
          ></img>
          </a>
          <p><a href="https://github.com/BondT1/Project-1-Vim-Gallery">GitHub Link</a></p>


          <h3>Team Profile Generator</h3>
          <a href="https://github.com/NazKena">
          <img
            src={ProfileGenImg}
            style={styles.creativeWork}
            alt="Nuseyba Kenadid"
          ></img>
          </a>
          <p><a href="https://github.com/NazKena/Tracking_Employees">GitHub Link</a></p>
      </div>
    </div>  
   </div> 
  );
}

export default Projects;