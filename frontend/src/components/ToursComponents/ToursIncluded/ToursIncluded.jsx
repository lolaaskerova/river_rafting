import React from "react";
import "./toursIncluded.scss";
import bus from "../../../assets/images/bus.png";
import expert from "../../../assets/images/expert.png";
import ripcurl from "../../../assets/images/ripcurl.png";
import parking from "../../../assets/images/parking.png";
import lunch from "../../../assets/images/lunch.png";
import video from "../../../assets/images/video.png";
const ToursIncluded = () => {
  return (
    <div className="tours-included container ">
      <div className="included-title">
        <h1>WHAT'S INCLUDED</h1>
        <p>
          Enjoy a full guided tour, catered camping with delicious
          guide-prepared meals. Maecenas sed diam eget risus varius blandit sit
          amet non magna.
        </p>
      </div>
      <div className="included">
        <div className="included-content">
          <div className="included-content-inner">
            <div className="included-logo">
              <img src={bus} alt="logo" />
            </div>
            <div className="included-text">
              <h5>Free Shuttle</h5>
              <p>
                Shuttle to and from rafting trip. Store your belongings safely
              </p>
            </div>
          </div>
          <div className="included-content-inner">
            <div className="included-logo">
              <img src={expert} alt="logo" />
            </div>
            <div className="included-text">
              <h5>Expert Training</h5>
              <p>
                1 hour safety and rafting training with a class 5 rafting guide
              </p>
            </div>
          </div>
        </div>
        <div className="included-content">
          <div className="included-content-inner">
            <div className="included-logo">
              <img src={ripcurl} alt="logo" />
            </div>
            <div className="included-text">
              <h5>Full Ripcurl Gear</h5>
              <p>
                Rafting gear to keep you warm and comfortable during your trip
              </p>
            </div>
          </div>
          <div className="included-content-inner">
            <div className="included-logo">
              <img src={parking} alt="logo" />
            </div>
            <div className="included-text parking">
              <h5>Parking</h5>
              <p>
                Park your vehicle free of charge at the shuttle pickup location
              </p>
            </div>
          </div>
        </div>
        <div className="included-content">
          <div className="included-content-inner">
            <div className="included-logo">
              <img src={lunch} alt="logo" />
            </div>
            <div className="included-text">
              <h5>Lunch</h5>
              <p>
                All rafting tours include a nutritious lunch arounds half way
                through
              </p>
            </div>
          </div>
          <div className="included-content-inner">
            <div className="included-logo">
              <img src={video} alt="logo" />
            </div>
            <div className="included-text video">
              <h5>GoPro Video</h5>
              <p>
                Bring the memories home with a high-def GoPro video of the
                action
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursIncluded;
