import React from "react";
import { Link } from "react-router-dom";
import "./ourTours.scss";
import chillout from "../../assets/images/chilloutTour.jpg";
const OurTours = (props) => {
  const { title } = props;
  return (
    <div className="our-tours-part">
      <div className="tours-container">
        <div className="our-tours-content">
          <div className="tours-content-top">
            <div className="our-tours-titles">
              <h2>{title}</h2>
              <p>
                Enjoy a full guided, catered camping with delicious meals. Come
                and join the thrill and excitement of white water rafting with
                the team!
              </p>
            </div>
          </div>
          <div className="tours-content-bottom">
            <div className="our-tours-sorting">
              <span>Sort :</span>
              <button>All</button>
              <button>Advanced</button>
              <button>Multi-Day</button>
              <button>Rapids</button>
            </div>
            <div className="row all-tours">
              <div className="col-lg-4 col-md-6 col-sm-12 tour-card">
                <div className="tour-card-content">
                  <span>6 hours</span>
                  <div className="tour-card-title">
                    <h3>River Rock Tour</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Link to="/tours">
                      <button>VIEW TOUR</button>
                    </Link>
                  </div>
                </div>
                <div className="tours-card-img">
                  <img src={chillout} alt="tourImg" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 tour-card">
                <div className="tour-card-content">
                  <span>2 days</span>
                  <div className="tour-card-title">
                    <h3>Camping Tour</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Link to="/tours">
                      <button>VIEW TOUR</button>
                    </Link>
                  </div>
                </div>
                <div className="tours-card-img">
                  <img src={chillout} alt="tourImg" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 tour-card">
                <div className="tour-card-content">
                  <span>8 hours</span>
                  <div className="tour-card-title">
                    <h3>Waterfall Tour</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Link to="/tours">
                      <button>VIEW TOUR</button>
                    </Link>
                  </div>
                </div>
                <div className="tours-card-img">
                  <img src={chillout} alt="tourImg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTours;
