import React from "react";
import "./packagesSpecials.scss";
import chilkoTour from "../../../assets/images/chilkoTour.jpg";
import whiteWater from "../../../assets/images/whiteWater.jpg";
import rapidTour from "../../../assets/images/rapidsTour.jpg";
import card from "../../../assets/images/card.png";
const PackagesSpecials = () => {
  return (
    <div className="packages-packages">
      <div className="container">
        <div className="title">
          <div className="logo">
            <img src={card} alt="logo" />
          </div>
          <h1>SPECIALS</h1>
          <p>Great deals on amazing tours</p>
        </div>
        <div className="row special-tours">
          <div className="col-4">
            <div class="card">
              <div className="tour-price">
                <h4>$399</h4>
                <span>/person</span>
              </div>
              <img class="card-img-top" src={chilkoTour} alt="tourImg" />

              <div class="tour-content">
                <span>2 FOR 1</span>
                <h5 class="card-title">Backountry Tour</h5>
                <p class="card-text">
                  Paddle the longest, continuous Class IV whitewater
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="card">
              <div className="tour-price">
                <h4>$299</h4>
                <span>/person</span>
              </div>
              <img class="card-img-top" src={whiteWater} alt="tourImg" />

              <div class="tour-content">
                <span>25% OFF</span>
                <h5 class="card-title">Corporate Retreats</h5>
                <p class="card-text">
                  Paddle the longest, continuous Class IV whitewater
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 ">
            <div class="card">
              <div className="tour-price">
                <h4>$349</h4>
                <span>/person</span>
              </div>
              <img class="card-img-top" src={rapidTour} alt="tourImg" />

              <div class="tour-content">
                <span>SAVE $50</span>
                <h5 class="card-title">Chill Out Tour</h5>
                <p class="card-text">
                  Paddle the longest, continuous Class IV whitewater
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesSpecials;
