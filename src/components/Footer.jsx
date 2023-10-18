import React from "react";
import "../styles/Footer.css";
import SocialLinks from "./SocialLinks"; // Import the SocialLinks component
import imageSrc from "../assets/images/V-Logo-white.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={imageSrc} alt="Logo" className="footer-logo" />
          <p className="footer-description">
            Full Stack Developer. <br />
            From Concept to Completion - Let me Help You Turn Your Vision into a
            Reality!
          </p>
          <SocialLinks />
        </div>
        <div className="footer-right">
          <ul className="nav-links">
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
