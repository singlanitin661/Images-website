import React, { useCallback, useState } from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="root">
      <section id="contact">
        <div className="contact-box">
          <div className="contact-links">
            <h2 className="contact_h2">CONTACT</h2>
            <div className="links">
              <div className="link">
                <a>
                  <img
                    className="contact_img"
                    src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
                    alt="linkedin"
                  />
                </a>
              </div>
              <div className="link">
                <a>
                  <img
                    className="contact_img"
                    src="https://i.postimg.cc/YCV2QBJg/github.png"
                    alt="github"
                  />
                </a>
              </div>
              <div className="link">
                <a>
                  <img
                    className="contact_img"
                    src="https://i.postimg.cc/W4Znvrry/codepen.png"
                    alt="codepen"
                  />
                </a>
              </div>
              <div className="link">
                <a>
                  <img
                    className="contact_img"
                    src="https://i.postimg.cc/NjLfyjPB/email.png"
                    alt="email"
                  />
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
