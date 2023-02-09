import React, { useState } from "react";
// import Calendar from "react-calendar";
import "./hero.scss";
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="calendar">
            <img
              id="calendar"
              src="https://freepngimg.com/thumb/calendar/2-2-calendar-png-image.png"
              alt="calendar"
            />
          </div>
          <div className="hero-title">
            <h1>BOOK YOUR TICKETS TODAY!</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
