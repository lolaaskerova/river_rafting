import React from "react";
import { Link } from "react-router-dom";
import "./careersHero.scss";
const HeroSection = () => {
    return (
        <div className="careers-hero">
            <div className="hero-title">
                <h1>JOIN THE EXCITEMENT</h1>
                <p>We're always looking for fun, adventurous staff to join our team!</p>
                <button>
                    <Link to="/tours">View Openings</Link>
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
