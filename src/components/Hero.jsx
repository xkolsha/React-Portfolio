import React from "react";
import CTAButton from "./CTAButton";
import "../styles/Hero.css";

function Hero() {
  const goToPortfolio = () => {
    // TODO: Navigate to Portfolio section
  };

  const contactMe = () => {
    // TODO: Navigate to Contact section
  };

  return (
    <div className="hero">
      <h1>Full Stack Developer</h1>
      <h2>
        From Concept to Completion - Let me Help You Turn Your Vision into a
        Reality!
      </h2>
      <div className="hero-CTAButtons">
        <CTAButton
          label="Portfolio"
          action={goToPortfolio}
          type="btn-primary"
        />
        <CTAButton label="Contact Me" action={contactMe} type="btn-primary" />
      </div>
    </div>
  );
}

export default Hero;
