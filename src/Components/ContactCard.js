import React from "react";
import "../CSS/ContactCard.css";

function ContactCard(props) {
  return (
    <div className="card-container">
      <img
        className="profile-pic"
        src={require("../Images/" + props.profilePic)}
        alt="Head shot"
      />
      <div className="contact-text">
        <h2>{props.name}</h2>
        <p>{props.contactInfo}</p>
      </div>
    </div>
  );
}

export default ContactCard;
