import React from "react";
import "../styles/Footer.css";
import imageSrc from "../assets/images/V-Logo-white.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={imageSrc} alt="Logo" className="footer-logo" />
        <p className="footer-description">
          Full Stack Developer. <br />
          From Concept to Completion - Let me Help You Turn Your Vision into a
          Reality!
        </p>
        <div className="social-icons">
          <a
            href="https://github.com/xkolsha"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/aviadkohn"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
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
    </footer>
  );
}

export default Footer;
