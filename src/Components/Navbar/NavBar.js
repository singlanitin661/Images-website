import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <span className="nav-logo">
            IMAGES
            <i className="fas fa-code"></i>
          </span>

          <ul className={click ? "nav-menu active" : "nav-menu"} style={{cursor:"pointer"}}>
            <li className="nav-item">
              <span
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </span>
            </li>
            <li className="nav-item">
              <span
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </span>
            </li>
            <li className="nav-item">
              <span
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Events
              </span>
            </li>
            <li className="nav-item">
              <span
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Members
              </span>
            </li>
            <li className="nav-item">
              <span
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </span>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;