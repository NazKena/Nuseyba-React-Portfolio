import React from "react";
import GitHubLogo from "../img/GitHub-Mark.png";
import LinkedInLogo from "../img/LinkedIn_icon_circle.svg.png";

const styles = {
  logo: {
    width: "10%",
    display: "flex",
  },
    container: {
    display: "flex",
    flexDirection: "column",
    left: "0",
    bottom: "0",
    },
};

function Footer() {
  return (
    <footer style={styles.container}>
      <section>
        <div class="phone">
          <a href="tel:074ººººººººººº">Phone Number</a>
        </div>
        <div class="email">
          <a href=":mailto:n.kenadiid@gmail.com">Email</a>
          <div class="logo">
            <a href="https://uk.linkedin.com/in/nuseyba-kenadid-a97832227">
              <img src={LinkedInLogo} style={styles.logo}></img>
            </a>
          </div>
          <div class="logo">
            <a href="https://github.com/NazKena">
              <img src={GitHubLogo} style={styles.logo}></img>
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
