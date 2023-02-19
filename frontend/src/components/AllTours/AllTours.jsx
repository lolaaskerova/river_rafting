import React from "react";
import { Link } from "react-router-dom";
import "./allTours.scss";

const AllTours = ({ tours }) => {
  return (
    <div className="all-tours">
      <div className="row">
        {tours &&
          tours.map((t) => (
            <div className="col-lg-4 col-md-6 col-sm-12 tour-card" key={t._id}>
              <div className="tour-card-content">
                {t.time >= 24 ? (
                  <span>{t.time / 24} days</span>
                ) : (
                  <span>{t.time} hours</span>
                )}
                <div className="tour-card-title">
                  <h3>{t.name}</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <Link to="/tours">
                    <button>VIEW TOUR</button>
                  </Link>
                </div>
              </div>
              <div className="tours-card-img">
                <img src={t.image} alt="tourImg" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllTours;
