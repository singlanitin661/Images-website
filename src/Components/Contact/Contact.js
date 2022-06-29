import React, { useCallback, useState } from "react";
import "./Contact.css";
import mail from "../Images/gmail.png";
import facebook from "../Images/facebook.png";
import linkedin from "../Images/linkedin.png";
import insta from "../Images/instaold.png";

export default function Contact() {
  return (
    <div className="root">
      <section id="contact">
        <div className="contact-box">
          <div className="contact-links">
            <h2 className="contact_h2">Contact Us</h2>
            <p style={{ color: "black", zIndex: "5", fontWeight: "450" }}>
              Share your creative ideas or just say us hello😉
            </p>
            <div className="links">
              <div className="link">
                <a href="https://www.facebook.com/imagesonnet/">
                  <img className="contact_img" src={facebook} alt="facebook" />
                </a>
              </div>
              <div className="link">
                <a href="https://instagram.com/images_chandigarh?igshid=16blcl5andwr3">
                  <img className="contact_img" src={insta} alt="instagram" />
                </a>
              </div>
              <div className="link">
                <a href="https://www.linkedin.com/company/images.chandigarh/">
                  <img className="contact_img" src={linkedin} alt="linkedin" />
                </a>
              </div>
              <div className="link">
                <a href="mailto:images.desk@gmail.com">
                  <img className="contact_img" src={mail} alt="email" />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form>
              <div className="form-item">
                <input
                  className="contact_input"
                  type="text"
                  name="sender"
                  required
                />
                <label className="contact_label">Name:</label>
              </div>
              <div className="form-item">
                <input
                  className="contact_input"
                  type="text"
                  name="email"
                  required
                />
                <label className="contact_label">Email:</label>
              </div>
              <div className="form-item">
                <textarea
                  className="contact_textarea"
                  name="message"
                  required
                ></textarea>
                <label className="contact_label">Message:</label>
              </div>
              <button className="submit-btn">Send</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
