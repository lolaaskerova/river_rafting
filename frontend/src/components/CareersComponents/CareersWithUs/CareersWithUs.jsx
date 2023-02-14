import React from "react";
import OpenableQuestion from "../../OpenableQuestion/OpenableQuestion";
import "./careersWithUs.scss";

const CareersWithUs = () => {
  return (
    <div className="careers-with-us-field">
      <div className="container">
        <div className="careers-with-us-content">
          <div className="careers-with-us-title">
            <h2>CAREERS WITH US</h2>
            <p>
              Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo
              quam.
            </p>
          </div>
          <div className="careers-with-us-infos">
            <OpenableQuestion
              title="Rafting Guide"
              content="I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            />
            <OpenableQuestion
              title="Equipment Manager"
              content="I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            />
            <OpenableQuestion title="Shuttle Driver" content="Toggle Content" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersWithUs;
