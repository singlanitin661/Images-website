import React from "react";
import { Link } from "react-router-dom";
import image from "../Images/images.png";
import "./Nav.css";
function Nav() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark "
        style={{ backgroundColor: "19191b" }}
      >
        <div className="container-fluid">
          <Link to="/">
            <a
              className="navbar-brand text-white"
              href="#"
              style={{ fontWeight: "700" }}
            >
              <img
                src={image}
                alt=""
                width="30"
                height="26"
                className="d-inline-block align-text-top"
              />
              IMAGES
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  ">
              <Link to="/">
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
              </Link>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="http://www.exploreimages.org/"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Events
                </a>
                <ul
                  className="dropdown-menu "
                  style={{ backgroundColor: "#19191b" }}
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item text-white" href="#">
                      Recruitment
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="#">
                      Workshops
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="#">
                      GBM
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="#">
                      Farewell
                    </a>
                  </li>
                </ul>
              </li>
              <Link to="/members">
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="#"
                  >
                    Members
                  </a>
                </li>
              </Link>
              <Link to="/contact">
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
