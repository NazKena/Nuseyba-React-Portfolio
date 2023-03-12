import React from "react";
import Navbar from "../App"


function Contact() {
  return (
    <div>
      <h3>Contact Form</h3>

      <div className="container">
        <form action="/action_page.php">
          <input type="text" name="firstname" placeholder="Your name.."></input>
          <input
            type="text"
            name="firstname"
            placeholder="Your last name.."
          ></input>
          <input
            type="text"
            name="firstname"
            placeholder="Your email address.."
          ></input>
          <label for="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
          ></textarea>
        </form>
      </div>
    </div>
  );
}

export default Contact;
