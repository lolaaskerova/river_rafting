import React, { useState } from "react";
import camp from "../../../assets/images/camp.png";
import { AiFillCaretRight } from "react-icons/ai";
import "./aboutUsCareer.scss";
const AboutUsCareer = () => {
  const [open, setOpen] = useState(0);
  const changeNumber = (x) => {
    if (open === x) {
      setOpen(0);
    } else {
      setOpen(x);
    }
  };
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
      <div className="content">
        <div className="title">
          <AiFillCaretRight />
          <h6
            onClick={() => {
              changeNumber(1);
            }}
          >
            Kayak Guide
          </h6>
        </div>
        <div className="text">
          <p className={open === 1 ? "active" : ""}>
            I am item content. Click edit button to change this text. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
      <div className="content">
        <div className="title">
          <AiFillCaretRight />
          <h6
            onClick={() => {
              changeNumber(2);
            }}
          >
            Equipment Manager
          </h6>
        </div>
        <div className="text">
          <p className={open === 2 ? "active" : ""}>
            I am item content. Click edit button to change this text. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
      <div className="content">
        <div className="title">
          <AiFillCaretRight />
          <h6
            onClick={() => {
              changeNumber(3);
            }}
          >
            Shuttle Driver
          </h6>
        </div>
        <div className="text">
          <p className={open === 3 ? "active" : ""}>
            I am item content. Click edit button to change this text. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
      <div className="content">
        <div className="title">
          <AiFillCaretRight />
          <h6
            onClick={() => {
              changeNumber(4);
            }}
          >
            Tour Guide
          </h6>
        </div>
        <div className="text">
          <p className={open === 4 ? "active" : ""}>
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
