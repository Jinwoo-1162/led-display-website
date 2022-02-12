import React from "react";
import ImgTextBox from "../Components/ImgTextBox";
import NavBar from "../Components/NavBar";
import "../CSS/Home.css";

function Home() {
  return (
    <div className="homepage">
      <NavBar />
      <div className="page-content">
        <ImgTextBox className="main-content" imgSource="Led.JPG" text="Hello" />
      </div>
    </div>
  );
}

export default Home;
