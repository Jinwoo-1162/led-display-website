import React from "react";
import { Link } from "react-router-dom";
import "../CSS/NavBarItem.css";

function NavBarItem(props) {
  return (
    <Link className="nav-link" to={props.link}>
      <div className="nav-item-div">{props.name}</div>
    </Link>
  );
}

export default NavBarItem;
