import React from "react";
import NavBar from "../Components/NavBar";
import ImgTextBox from "../Components/ImgTextBox";
import ContactCard from "../Components/ContactCard";
import "../CSS/Contact.css";

function Contact() {
  return (
    <div className="contactpage">
      <NavBar />
      <div className="page-content">
        {/* <ImgTextBox
          className="main-content"
          imgSource="Led.JPG"
          title="Contact Us"
          text="Reach us here"
        ></ImgTextBox> */}
        <ContactCard
          profilePic="Akash.jpg"
          name="Akash Harapanahalli"
          contactInfo="3rd year CompE Major"
        />
        <ContactCard
          profilePic="ECELogo.jpg"
          name="Someone Else"
          contactInfo="3rd year Something Major"
        />
        <ContactCard
          profilePic="ECELogo.jpg"
          name="Someone Else"
          contactInfo="3rd year Something Major"
        />
        <ContactCard
          profilePic="ECELogo.jpg"
          name="Someone Else"
          contactInfo="3rd year Something Major"
        />
        <ContactCard
          profilePic="ECELogo.jpg"
          name="Someone Else"
          contactInfo="3rd year Something Major"
        />
      </div>
    </div>
  );
}

export default Contact;
