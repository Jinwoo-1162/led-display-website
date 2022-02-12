import React from "react";
import ImgTextBox from "../Components/ImgTextBox";
import NavBar from "../Components/NavBar";
import "../CSS/About.css";

function About() {
  return (
    <div className="aboutpage">
      <NavBar />
      <div className="page-content">
        <ImgTextBox imgSource="Led.JPG" text="This is our mission" />
      </div>
    </div>
  );
}

export default About;
