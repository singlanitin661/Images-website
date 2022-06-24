import React from "react";
import "./About.css";
import group from "../Images/group.png";
function About() {
  return (
    <div>
      <div className="about">
        <h1 className="group"> About Us</h1>

        <div className="aboutus">
          <div className="group1">
            <p>
              IMAGES is a non-profit organization, founded in 1991, comprising
              of students of Punjab Engineering College(Deemed to be
              University), Chandigarh. Innovative Motivating Artistic Group of
              Engineering Students is what describes us. Our motto is “EXPLORING
              IN YOU...YOU!!” We believe that you are good but we provide you an
              opportunity to carve yourself different from others. With the
              stewardship & guidance of our seniors we take up untried
              challenges which enhance our learning & experience. IMAGES ensures
              that you conquer your weakness & explore your strengths. We
              believe that making no mistakes is biggest mistake, that makes us
              stand apart from others. So IMAGES helps you realize your full
              potential & develop a skill set pivotal for your personality
              growth by conducting annual tri-city level event in the odd
              semester and regular General Body Meetings (GBMs) in the even
              semester.
            </p>
          </div>
          <div className="group2">
            <img src={group} style={{ height: "150px", marginTop: "30px" }} />
          </div>
          {/* <span></span> */}
        </div>
      </div>
    </div>
  );
}

export default About;
