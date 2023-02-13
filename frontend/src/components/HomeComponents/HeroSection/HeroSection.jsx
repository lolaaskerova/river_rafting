import React from "react";
import { Link } from "react-router-dom";
import "./hero.scss";
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-title">
        <h1>WHITEWATER RAFTING</h1>
        <p>Come and join the excitement with our adventure rafting team!</p>
        <button>
          <Link to="/tours">View All Tours</Link>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
