import React from "react";
import OpenableQuestion from "../../OpenableQuestion/OpenableQuestion";
import "./faqEquipment.scss";
import body from "../../../assets/images/body.png";
const FAQEquipment = () => {
  return (
    <div className="faq-equipment">
      <div className="titles">
        <div className="equipment">
          <img src={body} alt="equipment" />
        </div>
        <div className="title">
          <h1>equipment</h1>
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

export default FAQEquipment;
