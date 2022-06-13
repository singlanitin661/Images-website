import React from "react";
import './Footer.css';
import image from './images.png'
import insta from './insta.png'
import facebook from './facebook.png'
import linkedin from './linkedin.png'
import youtube from './youtube.png'

function Footer() {
  return (
    <div>
        <footer className="footer-distributed">
        <div className="footer-left">
          <h3>IMAGES<img src={image} style={{maxHeight:'50px',paddingLeft:"5px",marginTop:"-10px"}} alt="slide 1" /></h3>
          <p className="footer-links">
            <a href="#" className="link-1">Home</a>
            <a href="http://www.exploreimages.org/">Blog</a>
            <a href="#">About</a>
            <a href="#">Events</a>
            <a href="#">Members</a>
            <a href="#">Contact</a>
          </p>

          <p className="footer-company-name">IMAGES © 2022</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p><span className="company-name">Images Club</span> Punjab Engineering College, Chandigarh</p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+1.555.555.5555</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>m@il us :<a href="mailto:images.desk@gmail.com"> images.desk@gmail.com</a></p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>Contact Us</span>
            Drop us email to share your queries and ideas or just say Hello!😃
          </p>

          <div style={{padding:"7px"}}>
                    <a href="https://www.facebook.com/imagesonnet/"><img src={facebook} /></a>
                    <a href="https://instagram.com/images_chandigarh?igshid=16blcl5andwr3"><img src={insta} /></a>
                    <a href="https://www.linkedin.com/company/images.chandigarh/"><img src={linkedin} /></a>
                    <a><img src={youtube} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
