import React from "react";
import "./gethereShuttle.scss";
import bus from "../../../assets/images/bus.png";
import stow from "../../../assets/images/stow.png";
import parking from "../../../assets/images/parking.png";
const GetHereShuttle = () => {
  return (
    <div className="container get-here-shuttle">
      <div className="shuttle-title">
        <div className="logo">
          <img src={bus} alt="bus" />
        </div>
        <div className="title">
          <h1>FREE SHUTTLE</h1>
          <p>
            Come and join the thrill and excitement of white water rafting with
            the adventure rafting team! Sed feugiat faucibus dui ut vulputate.
            Vivamus erat elit, viverra sed tempus a, tempus ac velit.
          </p>
        </div>
      </div>
      <div className="shuttle-content">
        <div className="shuttle">
          <div className="logo">
            <img src={stow} alt="stow" />
          </div>
          <div className="titles">
            <h5>Stow your luggage</h5>
            <p>
              Shuttle to and from rafting trip. Store your belongings safely.
            </p>
          </div>
        </div>
        <div className="shuttle">
          <div className="logo">
            <img src={parking} alt="parking" />
          </div>
          <div className="titles">
            <h5>Free Parking</h5>
            <p>
              Park your vehicle free of charge at the shuttle pickup location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetHereShuttle;
