import React from "react";
import "./faqPreparation.scss";
import OpenableQuestion from "../../OpenableQuestion/OpenableQuestion";
import map from "../../../assets/images/map.png";
const FAQPreparation = () => {
  return (
    <div className="faq-preparation">
      <div className="titles">
        <div className="preparation">
          <img src={map} alt="preparation" />
        </div>
        <div className="title">
          <h1>TRIP PREPARATION</h1>
        </div>
      </div>
      <OpenableQuestion
        title={"How safe is rafting?"}
        content={
          "I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        }
      />
      <OpenableQuestion
        title={"What should I bring on the rafting trip?"}
        content={
          "I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        }
      />
      <OpenableQuestion
        title={"What do I need to know beforehand?"}
        content={
          "I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        }
      />
    </div>
  );
};

export default FAQPreparation;
