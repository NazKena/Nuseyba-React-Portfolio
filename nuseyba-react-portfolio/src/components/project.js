import React, { useState } from "react";
import NoteTakerImg from "../img/Screenshot 2023-03-07 at 19.52.44.png";
import PassGenImg from "../img/127.0.0.1_5500_Develop_index.html.jpeg";
import ProfileGenImg from "../img/Screenshot 2023-03-01 at 13.32.34.png";
import VimGalleryImg from "../img/Screenshot 2023-03-11 at 16.47.01.png";

const styles = {
  row: {
    display: "flex",
    flexDirection: "row",
  },

  creativeWork: {
    width: "30%",
    borderRadius: "1%",
  },
};

function Projects() {
  return (
    <div id="creative-work">
      <h2>Creative Work</h2>
      <p>
        Here I will inclde both my services as well as outlets that serve to
        showcase my creative skills.
      </p>
      <div class="row">
        <h3>Note Taker</h3>
        <img
          src={NoteTakerImg}
          style={styles.creativeWork}
          alt="photo of Nuseyba Kenadid"
        ></img>

        <h3>Password Generator</h3>
        <img
          src={PassGenImg}
          style={styles.creativeWork}
          alt="photo of Nuseyba Kenadid"
        ></img>

        <h3>Vim Gallery</h3>
        <img
          src={VimGalleryImg}
          style={styles.creativeWork}
          alt="photo of Nuseyba Kenadid"
        ></img>

        <h3>Team Profile Generator</h3>
        <img
          src={ProfileGenImg}
          style={styles.creativeWork}
          alt="photo of Nuseyba Kenadid"
        ></img>
      </div>
    </div>
  );
}

export default Projects;
