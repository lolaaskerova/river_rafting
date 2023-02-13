import React from "react";
import "./story.scss";
const Story = (props) => {
  const { img, title, text1, text2, text3 } = props;
  return (
    <div className="story ">
      <div className="logo">
        <img src={img} alt="logo" />
      </div>
      <div className="story-title">
        <h1>{title}</h1>
      </div>
      <div className="story-text">
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
      </div>
    </div>
  );
};

export default Story;
