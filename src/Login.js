import React, { useState } from "react";
import "./Login.css";
import * as pic from './prespective.png';
function Login() {
  return (
    <div className="root">
      <section className="contact_us">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="contact_inner">
                <div className="row">
                  <div className="col-md-10">
                    <div className="contact_form_inner">
                      <div className="contact_field">
                        <h3>Login</h3>
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
                <div>
                  <img  className="contact_info_sec" src={require("./prespective.png")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Login;
