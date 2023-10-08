import React from "react";
import "../styles/ContentCard.css";

const ContentCard = ({ title, description, content }) => {
  return (
    <div className="content-card">
      <div className="content-card-content">{content}</div>
      <h2 className="content-title">{title}</h2>
      <p className="content-description">{description}</p>
    </div>
  );
};

export default ContentCard;
