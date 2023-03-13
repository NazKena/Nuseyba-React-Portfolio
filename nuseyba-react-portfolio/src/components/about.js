import React from "react";
import Navbar from "../App";
import Footer from "./footer";

function About() {
  return (
    <div>
      <Navbar />
      <h1>About Me</h1>
      <p>
        I am an English and Creative Writing graduate who has recently found
        that a different career path may be exactly what is needed to spark
        creativity again. Coding will allow for that and so much more. I hope to
        enhance my skills not only throughout the duration of this bootcamp but
        through the entirety of my software development journey.
      </p>
      <Footer />
    </div>
  );
}

export default About;