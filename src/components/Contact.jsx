import React from "react";
import "../styles/Contact.css";
import CTAButton from "./CTAButton";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  const handleForm = () => {
    console.log("Form submitted");
  };

  const downloadResume = () => {
    // Placeholder URL for navigating to the resume
    const resumeURL = "http://www.example.com/path/to/your/resume.pdf";
    window.open(resumeURL, "_blank");
  };

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
          <CTAButton label="Submit" action={handleForm} type="btn-primary" />
        </form>
      </div>
      <div className="contact-card right-card">
        <h2>Reach me directly!</h2>
        <p>Email: info@aviadkohn.com</p>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Contact;
