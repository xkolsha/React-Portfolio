import React from "react";
import "../styles/About.css";
import imageSrc from "../assets/images/about-image.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h2 className="about-title">How I'm Different</h2>
        <p className="about-description">
          After careers in the security and defence industries, I followed my
          passion for IT and creative services. I've helped businesses reach
          their goals through IT support, management, and design projects. I'm
          focused on overseeing projects from concept through final delivery.
          Throughout my career, I have contributed to positive business results
          through effective organization, prioritization, and execution of
          critical projects. My experience as a defence veteran gave me a broad
          vision of others' needs while respecting and valuing cultural
          diversity.
        </p>
      </div>
      <div className="about-image">
        <img
          src={imageSrc}
          alt="silhouette of a girl gazing towards the horizon"
        />
      </div>
    </div>
  );
};

export default About;
