import React from "react";
import image from './images.png'
function Nav() {
  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-transparent" style={{paddingLeft:"30px", maxHeight:"60px"}} >
        <div className="container-fluid" >
          <a className="navbar-brand text-white" href="#" style={{fontWeight:"700"}}>
          <img src={image} alt="" width="30" height="26" class="d-inline-block align-text-top"/>
             IMAGES 
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  me-auto mb-2 mb-lg-0 " style={{position:"absolute",right:"30px"}}>
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
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
                <ul className="dropdown-menu bg-transparent" aria-labelledby="navbarDropdown" style={{border:"none"}}>
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
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="#">
                Members
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="#">
                Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
