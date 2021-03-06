import React from "react";
import "../CSS/ImgTextBox.css";

function ImgTextBox(props) {
  return (
    <div className="content-container">
      <img
        className="content-image"
        src={require("../Images/" + props.imgSource)}
        alt="content image"
      />
      <h1 className="content-title">{props.title}</h1>
      <p className="content-text">{props.text}</p>
    </div>
  );
}

export default ImgTextBox;
