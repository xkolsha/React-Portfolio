import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card left-card">
        <h2>Get in touch</h2>
        <p>Contact Me. I'll be happy to help!</p>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Leave us a message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-card right-card">
        <h2>Reach me directly!</h2>
        <p>Email: info@aviadkohn.com</p>
        {/* Social Media Links */}
      </div>
    </div>
  );
};

export default Contact;
