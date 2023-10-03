import React from "react";
import "../styles/CTAButton.css";

function CTAButton({ label, action, type }) {
  return (
    <button className={`btn ${type}`} onClick={action}>
      {label}
    </button>
  );
}

export default CTAButton;
