import React from "react";
import "./faqSafety.scss";
import safety from "../../../assets/images/safety.png";
import OpenableQuestion from "../../OpenableQuestion/OpenableQuestion";
const FAQSafety = () => {
  return (
    <div className="faq-safety">
      <div className="titles">
        <div className="safety">
          <img src={safety} alt="safety" />
        </div>
        <div className="title">
          <h1>safety</h1>
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

export default FAQSafety;
