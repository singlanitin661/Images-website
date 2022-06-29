import React from "react";
import "./Footer.css";
import image from "../Images/images.png";
import insta from "../Images/instaold.png";
import facebook from "../Images/facebook.png";
import linkedin from "../Images/linkedin.png";
import youtube from "../Images/youtube.png";
import { Link } from "react-router-dom";
import gmail from "../Images/email.png";
function Footer() {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            IMAGES
            <img
              src={image}
              style={{
                maxHeight: "50px",
                paddingLeft: "5px",
                marginTop: "-10px",
              }}
              alt="slide 1"
            />
          </h3>
          <p className="footer-links">
            <span style={{ cursor: "pointer" }}>Home</span>
            <a href="http://www.exploreimages.org/">Blog</a>
            <Link to="/">
              <span>About</span>
            </Link>
            <Link to="/event">
              <span>Events</span>
            </Link>
            <Link to="/members">
              <span>Members</span>
            </Link>
            <Link to="/contact">
              <span>Contact</span>
            </Link>
          </p>

          <p className="footer-company-name">EXPLORE-IMAGES © 2022</p>
        </div>

        <div className="footer-center">
          <div>
            <p>
              <span className="company-name">Images Club</span> Punjab
              Engineering College, Chandigarh
            </p>
          </div>

          <div>
            <p
              style={{
                paddingTop: "15px",
                paddingBottom: "8px",
                color: "#20b2aa",
              }}
            >
              Drop us email to share your ideas or just say Hello!😃
            </p>
            <br />
            <img src={gmail} style={{ height: "23px" }} alt="" />
            <span>{"  "}</span>
            <a href="mailto:images.desk@gmail.com">
              {"   "}: images.desk@gmail.com
            </a>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>Contact Us</span>
            Join Us on various social media groups
          </p>

          <div style={{ padding: "7px" }}>
            <a href="https://www.facebook.com/imagesonnet/">
              <img src={facebook} />
            </a>
            <a href="https://instagram.com/images_chandigarh?igshid=16blcl5andwr3">
              <img src={insta} />
            </a>
            <a href="https://www.linkedin.com/company/images.chandigarh/">
              <img src={linkedin} />
            </a>
            <a>
              <img src={youtube} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
