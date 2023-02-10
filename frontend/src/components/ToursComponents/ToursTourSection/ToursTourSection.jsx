import React from "react";
import { Link } from "react-router-dom";
import "./toursTourSection.scss";

const ToursTourSection = () => {
  return (
    <div className="tours-tour-part">
      <div className="tours-tour-titles">
        <h1>OUR TOURS</h1>
        <p>
          Enjoy a full guided, catered camping with delicious meals. Come and
          join the thrill and excitement of white water rafting with the team!
        </p>
      </div>
      <div className="tours-tour-sorting">
        <span>Sort :</span>
        <button>All</button>
        <button>Advanced</button>
        <button>Multi-Day</button>
        <button>Rapids</button>
      </div>
      <div className=" row all-tours">
        <div className="col-4 tour-card">
          <div className="card-content">
            <span>6 hours</span>
            <h2>River Rock Tour</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Link to="/tours">VIEW TOUR</Link>
          </div>
          <img
            src="https://demo.themovation.com/embark/wp-content/uploads/2017/05/home-cta.jpg"
            alt="tourImg"
          />
        </div>
        <div className="col-4 tour-card">
          <div className="card-content">
            <span>6 hours</span>
            <h2>River Rock Tour</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Link to="/tours">VIEW TOUR</Link>
          </div>
          <img
            src="https://demo.themovation.com/embark/wp-content/uploads/2017/05/home-cta.jpg"
            alt="tourImg"
          />
        </div>
        <div className="col-4 tour-card">
          <div className="card-content">
            <span>6 hours</span>
            <h2>River Rock Tour</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Link to="/tours">VIEW TOUR</Link>
          </div>
          <img
            src="https://demo.themovation.com/embark/wp-content/uploads/2017/05/home-cta.jpg"
            alt="tourImg"
          />
        </div>
      </div>
    </div>
  );
};

export default ToursTourSection;
