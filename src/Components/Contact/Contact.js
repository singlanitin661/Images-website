import React, { useState } from "react";
import "./Contact.css";
import insta from "../Images/insta.png";
import facebook from "../Images/facebook.png";
import linkedin from "../Images/linkedin.png";
import youtube from "../Images/youtube.png";

function Contact() {
  return (
    <div>
      <section className="contact_us">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="contact_inner">
                <div className="row">
                  <div className="col-md-10">
                    <div className="contact_form_inner">
                      <div className="contact_field">
                        <h1>Contact Us</h1>
                        <p>
                          Feel free to contact us for your queries or Just say
                          Hello😃
                        </p>
                        <input
                          type="text"
                          className="form-control form-group"
                          placeholder="Name"
                        />
                        <input
                          type="text"
                          className="form-control form-group"
                          placeholder="Email"
                        />
                        <textarea
                          className="form-control form-group"
                          placeholder="Message"
                        ></textarea>
                        <button className="contact_form_submit">Send</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="right_conatct_social_icon d-flex align-items-end"></div>
                  </div>
                </div>
                <div className="contact_info_sec">
                  <h4>Contact Info</h4>
                  <div className="d-flex info_single align-items-left">
                    <span>+91 8009 054294</span>
                  </div>
                  <div className="d-flex info_single align-items-left">
                    <span>images.desk@gmail.com</span>
                  </div>
                  <div className="info_single_name ">
                    <span>Registered under chandigarh administration.</span>
                    <div style={{ padding: "7px", display: "flex" }}>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Contact;
