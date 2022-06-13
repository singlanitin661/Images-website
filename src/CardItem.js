import React, { Component } from "react";

export class CardItem extends Component {
  render() {
    let { title, description ,imageUrl , source , date} = this.props;
    return (
      <div className="container my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} style={{maxHeight:"200px"}} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description.slice(0,100)}...</p>
            <p className="card-text"><small className="text-muted">Event on {date}</small></p>
                        
            <a rel="noreferrer" href="http://www.exploreimages.org/" target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default CardItem;
