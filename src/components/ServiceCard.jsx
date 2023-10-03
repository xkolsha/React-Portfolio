import React from "react";
import Lottie from "lottie-react";

const ServiceCard = ({ title, description, animationData }) => (
  <div className="service-card">
    <div className="lottie-container">
      <Lottie animationData={animationData} />
    </div>
    <h2 className="service-title">{title}</h2>
    <p className="service-description">{description}</p>
  </div>
);

export default ServiceCard;
