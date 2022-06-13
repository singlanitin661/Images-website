import React from "react";
import './Carousel.css'
import myImage1 from './1.jpg'
import myImage2 from './2.jpg'
import myImage3 from './3.jpg'
function Carousel() {
  return (
    <div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner  size">
          <div className="carousel-item active">
            <img src={myImage1} className="d-block h-10 w-100 img" style={{maxHeight:'500px'}} alt="slide 1" />
          </div>
          <div className="carousel-item  size">
            <img src={myImage2} className="d-block h-10 w-100 img" style={{maxHeight:'500px'}} alt="slide 2" />
          </div>
          <div className="carousel-item  size">
            <img src={myImage3} className="d-block h-10 w-100 img" style={{maxHeight:'500px'}} alt="slide 3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
