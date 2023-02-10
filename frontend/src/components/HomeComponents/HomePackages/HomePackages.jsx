import React from "react";
import "./homePackages.scss";
import backcountryTour from "../../../assets/images/backcountryTour.jpg";
import corporateTour from "../../../assets/images/corporateTour.jpg";
import chilloutTour from "../../../assets/images/chilloutTour.jpg";

const HomePackages = () => {
  return (
    <div className="home-packages container">
      <div className="title">
        <h1>SPECIALS & PACKAGES</h1>
        <p>
          Enjoy a fully guided tour, catered camping with delicious
          guide-prepared meals. Maecenas sed diam eget risus varius blandit sit
          amet non magna.
        </p>
      </div>
      <div className="row special-tours">
        <div className="col-4">
          <div class="card">
            <div className="tour-price">
              <h4>$399</h4>
              <span>/person</span>
            </div>
            <img class="card-img-top" src={backcountryTour} alt="tourImg" />

            <div class="tour-content">
              <span>2 FOR 1</span>
              <h5 class="card-title">Backountry Tour</h5>
              <p class="card-text">
                Explore the backcountry with some fellow adrenaline seekers.
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
            <img class="card-img-top" src={corporateTour} alt="tourImg" />

            <div class="tour-content">
              <span>25% OFF</span>
              <h5 class="card-title">Corporate Retreats</h5>
              <p class="card-text">
                Experience team building and fun explorations of the Chilko
                River.
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
            <img class="card-img-top" src={chilloutTour} alt="tourImg" />

            <div class="tour-content">
              <span>SAVE $50</span>
              <h5 class="card-title">Chill Out Tour</h5>
              <p class="card-text">
                Open for paddler camping next weekend. Offseason rates apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePackages;
