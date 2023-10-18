import React, { useState } from "react";
import "../styles/Contact.css";
import CTAButton from "./CTAButton";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  const handleForm = () => {
    console.log("Form submitted");
  };

  const downloadResume = () => {
    const resumeURL =
      "https://1drv.ms/b/s!As0hKguCANy1u4xeQtHeKvbkccsPTw?e=4Dscen";
    window.open(resumeURL, "_blank");
  };

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(e.target.value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className="contact-container">
      {/* <div className="contact-card left-card">
        <h2>Get in touch</h2>
        <p>Contact Me. I'll be happy to help!</p>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <span>{emailError}</span>}
          <input type="tel" placeholder="Phone" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Leave us a message"></textarea>
          <CTAButton label="Submit" action={handleForm} type="btn-primary" />
        </form>
      </div> */}
      <div className="contact-card">
        <h2>Reach me directly!</h2>
        <p>
          Email: <a href="mailto:info@aviadkohn.com">info@aviadkohn.com</a>
        </p>
        <SocialLinks />
        <CTAButton
          label="Download Resume"
          action={downloadResume}
          type="btn-secondary"
        />
      </div>
    </div>
  );
};

export default Contact;
