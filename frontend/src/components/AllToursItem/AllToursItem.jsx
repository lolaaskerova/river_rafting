import React from "react";
import { Link } from "react-router-dom";
import "./allToursItem.scss";

const AllToursItem = (props) => {
  const { time, heading, image } = props;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 tour-card">
      <div className="tour-card-content">
        <span>{time}</span>
        <div className="tour-card-title">
          <h3>{heading}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Link to="/tours">
            <button>VIEW TOUR</button>
          </Link>
        </div>
      </div>
      <div className="tours-card-img">
        <img src={image} alt="tourImg" />
      </div>
    </div>
  );
};

export default AllToursItem;
