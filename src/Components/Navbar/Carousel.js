import React from "react";
import "./Carousel.css";
import myImage1 from "../Images/1.jpg";
import myImage2 from "../Images/2.jpg";
import myImage3 from "../Images/3.jpg";
function Carousel() {
  return (
    <div className="root">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel "
      >
        <div className="carousel-inner  size">
          <div className="carousel-item active">
            <img
              src={myImage1}
              className="d-block h-10 w-100 img"
              style={{ height: "500px" }}
              alt="slide 1"
            />
          </div>
          <div className="carousel-item  size">
            <img
              src={myImage2}
              className="d-block h-10 w-100 img"
              style={{ height: "500px" }}
              alt="slide 2"
            />
          </div>
          <div className="carousel-item  size">
            <img
              src={myImage3}
              className="d-block h-10 w-100 img"
              style={{ height: "500px" }}
              alt="slide 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
