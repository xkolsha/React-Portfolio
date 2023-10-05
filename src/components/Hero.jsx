import React from "react";
import CTAButton from "./CTAButton";
import "../styles/Hero.css";
import heroImg from "../assets/images/Linkedin Profile Image1.png";

const Hero = ({ portfolioRef, contactRef }) => {
  const goToPortfolio = () => {
    console.log("Go to Portfolio clicked", portfolioRef); // Debugging line
    if (portfolioRef && portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const contactMe = () => {
    console.log("Contact Me clicked", contactRef); // Debugging line
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const buttons = [
    { label: "Portfolio", action: goToPortfolio, type: "btn-primary" },
    { label: "Contact Me", action: contactMe, type: "btn-primary" },
  ];

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Full Stack Developer</h1>
        <h2>
          From Concept to Completion - Let me Help You Turn Your Vision into a
          Reality!
        </h2>
        <div className="hero-buttons">
          {buttons.map((button, index) => (
            <CTAButton
              key={index}
              label={button.label}
              action={button.action}
              type={button.type}
            />
          ))}
        </div>
      </div>
      <div className="hero-photo">
        <img src={heroImg} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
