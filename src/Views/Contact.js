import React from "react";
import NavBar from "../Components/NavBar";
import ImgTextBox from "../Components/ImgTextBox";
import "../CSS/Contact.css";

function Contact() {
  return (
    <div className="contactpage">
      <NavBar />
      <div className="page-content">
        <ImgTextBox
          className="main-content"
          imgSource="Led.JPG"
          title="Contact Us"
          text="Reach us here"
        />
      </div>
    </div>
  );
}

export default Contact;
