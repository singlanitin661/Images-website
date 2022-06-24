import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

import "./Map.css";

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

const Map = ({ location, zoomLevel }) => (
  <section className="map_sec">
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div className="map_inner">
            <h4>Find Us on Google Map</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quo beatae quasi assumenda, expedita aliquam minima tenetur
              maiores neque incidunt repellat aut voluptas hic dolorem sequi ab
              porro, quia error.
            </p>

            <div className="map">
              <h2 className="map-h2">Come Visit Us At Our Campus</h2>

              <div className="google-map">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "" }}
                  defaultCenter={location}
                  defaultZoom={zoomLevel}
                >
                  <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                  />
                </GoogleMapReact>
              </div>
            </div>
            <div className="map_bind"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Map;
