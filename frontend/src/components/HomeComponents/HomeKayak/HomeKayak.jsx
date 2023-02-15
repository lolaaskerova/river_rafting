import React from "react";
import "./homeKayak.scss";
import kayak from "../../../assets/images/kayak.png";
import homeKayak from "../../../assets/images/homeKayak.jpg";
import { Link } from "react-router-dom";

const HomeKayak = () => {
  return (
    <div className="all-tours-field">
      <div className="kayak all-tours-text-field">
        <div className="all-tours-text-part">
          <div className="all-tours-text-icon">
            <img src={kayak} alt="kayak" />
          </div>
          <div className="all-tours-text">
            <h1>SIT BACK AND ENJOY</h1>
            <p>
              Enjoy a full guided tour, catered camping with delicious
              guide-prepared meals. Come and join the thrill and excitement of
              white water rafting with the adventure rafting team!
            </p>
            <Link to="/tours">View All Tours</Link>
          </div>
        </div>
      </div>
      <div className="all-tours-img">
        <img src={homeKayak} alt="kayak" />
      </div>
    </div>
  );
};

export default HomeKayak;
