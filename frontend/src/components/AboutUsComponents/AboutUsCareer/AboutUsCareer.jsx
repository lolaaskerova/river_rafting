import React, { useState } from "react";
import camp from "../../../assets/images/camp.png";
import { AiFillCaretRight } from "react-icons/ai";
import "./aboutUsCareer.scss";
const AboutUsCareer = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  console.log(active);
  return (
    <div className="about-us-career">
      <div className="titles">
        <div className="camp">
          <img src={camp} alt="camp" />
        </div>
        <div className="title">
          <h1>CAREERS WITH US</h1>
          <p>
            Quisque vestibulum fermentum fermentum. In nulla sem, gravida a
            feugiat in, maximus id orci. Donec nec sagittis ipsum, sit amet
            venenatis orci.
          </p>
        </div>
      </div>
      <div className="content">
        <div className="title">
          <AiFillCaretRight />
          <h6 onClick={() => handleClick()}>Kayak Guide</h6>
        </div>
        <div className="text">
          <p className={active ? "active" : undefined}>
            I am item content. Click edit button to change this text. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>

      <div className="content">
        <div className="title">
          <AiFillCaretRight />
          <h6 onClick={() => handleClick()}>Kayak Guide</h6>
        </div>
        <div className="text">
          <p className={active ? "active-second" : undefined}>
            I am item content. Click edit button to change this text. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCareer;
