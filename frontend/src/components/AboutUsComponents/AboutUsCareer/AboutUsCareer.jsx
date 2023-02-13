import React from "react";
import camp from "../../../assets/images/camp.png";
import "./aboutUsCareer.scss";
import OpenableQuestion from "../../OpenableQuestion/OpenableQuestion";
const AboutUsCareer = () => {
  return (
    <div className="about-us-career">
      <div className="titles">
        <div className="camp">
          <img src={camp} alt="camp" />
        </div>
        <div className="title">
          <h1>careers with us</h1>
          <p>
            Quisque vestibulum fermentum fermentum. In nulla sem, gravida a
            feugiat in, maximus id orci. Donec nec sagittis ipsum, sit amet
            venenatis orci.
          </p>
        </div>
      </div>
      <OpenableQuestion
        title="Kayak Guide"
        content="I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
      <OpenableQuestion
        title="Equipment Manager"
        content="I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
      <OpenableQuestion
        title="Shuttle Driver"
        content="I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
      <OpenableQuestion
        title="Tour Guide"
        content="I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
    </div>
  );
};

export default AboutUsCareer;
