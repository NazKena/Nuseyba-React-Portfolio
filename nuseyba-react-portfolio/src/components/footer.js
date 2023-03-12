import React from "react";
import GitHubLogo from "../img/GitHub-Mark.png";
import LinkedInLogo from "../img/LinkedIn_icon_circle.svg.png";

const styles = {
  logo: {
    width: "30%",
    whiteSpace:'nowrap',
    display:'flex',
  },
};

const Footer = () => {
  return (
    <div>
      <footer style={{ width: "40%", height: "40%", left: "0", bottom: "0" }}>
        <div class="email">
          <a href=":mailto:n.kenadiid@gmail.com">Email</a>
          <div class="logo">
            <a href="https://uk.linkedin.com/in/nuseyba-kenadid-a97832227">
              <img
                src={LinkedInLogo}
                style={styles.logo}
                alt="linkedin logo"
              ></img>
            </a>
          </div>
          <div class="logo">
            <a href="https://github.com/NazKena">
              <img src={GitHubLogo} style={styles.logo} alt="github logo"></img>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
