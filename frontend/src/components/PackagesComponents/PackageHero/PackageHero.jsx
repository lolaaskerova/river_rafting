import React from "react";
import QuestionInputs from "../../QuestionInputs/QuestionInputs";
import "./packageHero.scss";
const PackageHero = () => {
  return (
    <div className="package-hero">
      <div className="container package-hero-content">
        <div className="package-hero-title">
          <h1>PACKAGES & SPECIALS</h1>
          <p>Have a question? Let us know!</p>
        </div>
        <QuestionInputs />
      </div>
    </div>
  );
};

export default PackageHero;
