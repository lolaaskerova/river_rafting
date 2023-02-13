import React from "react";
import "./infoContent.scss";
const InfoContent = (props) => {
  const { img, title, text } = props;
  return (
    <div className="info-content">
      <div className="icon">
        <img src={img} alt="logo" />
      </div>
      <div className="info-content-titles">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default InfoContent;
