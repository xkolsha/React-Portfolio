import React from "react";
import Lottie from "lottie-react";
import "../styles/ServiceCard.css";

const ServiceCard = ({ title, description, animationData }) => {
  return (
    <div className="service-card">
      <Lottie animationData={animationData} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
