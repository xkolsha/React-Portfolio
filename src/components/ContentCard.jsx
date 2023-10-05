import React from "react";
import "../styles/ContentCard.css";

const ContentCard = ({ title, description, content }) => {
  return (
    <div className="content-card">
      <div className="content-card-content">{content}</div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ContentCard;
