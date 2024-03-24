import React from "react";
import "./ContactInfocard.css";

const ContactInfocard = ({ iconUrl, text }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <img src={iconUrl} alt={text}></img>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ContactInfocard;
