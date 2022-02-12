import React from "react";
import { Link } from "react-router-dom";
import "../CSS/NavBar.css";
import NavBarItem from "./NavBarItem";

function NavBar(props) {
  return (
    <div className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img
            src={require("../Images/ECELogo.jpg")}
            alt="ECE Logo"
            className="ece-logo"
          />
        </Link>
        <label className="logo-name">Spinning LED Display</label>
      </div>
      <div className="links">
        <NavBarItem link="/" name="Home" />
        <NavBarItem link="/contact" name="Contact" />
        <NavBarItem link="/about" name="About" />
      </div>
    </div>
  );
}

export default NavBar;
