import React from "react";
import Navbar from "../App";
import Footer from "./footer";

const style = {
  subject: {
    height: "200%", 
    width: "100%",
  }
}

function Contact() {
  return (
    <div>
      <Navbar />
      <h3>Contact Form</h3>
      <div className="container">
        <form action="/action_page.php">
        <label for="fname">First Name</label>
          <input type="text" name="firstname" placeholder="Your name.."></input>
          <label for="fname">Last Name</label>
          <input type="text" name="firstname" placeholder="Your last name.."></input>
          <label for="fname">Email Address</label>
          <input type="text" name="firstname" placeholder="Your email address.."></input>
          <label for="subject" style={style.subject}>Subject</label><textarea id="subject" name="subject" placeholder="Write something.."></textarea>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
