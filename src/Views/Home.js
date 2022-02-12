import React from "react";
import ImgTextBox from "../Components/ImgTextBox";
import NavBar from "../Components/NavBar";
import "../CSS/Home.css";
import content from "../content.json";

function Home() {
  return (
    <div className="homepage">
      <NavBar />
      <div className="page-content">
        <ImgTextBox
          className="main-content"
          imgSource={content.home.imageSource}
          title={content.home.title}
          text={content.home.text}
        />
      </div>
    </div>
  );
}

export default Home;
