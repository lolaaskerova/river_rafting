import React, { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import "./openableQuestion.scss";

const OpenableQuestion = (props) => {
  const { title, content } = props;
  const [open, setOpen] = useState(false);
  const changeNumber = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return (
    <div className="content">
      <div className="title">
        <AiFillCaretRight
          className={open ? "rotate-button" : ""}
          onClick={() => {
            changeNumber();
          }}
        />
        <h6
          onClick={() => {
            changeNumber();
          }}
        >
          {title}
        </h6>
      </div>
      <div className="text">
        <p className={open ? "active" : ""}>{content}</p>
      </div>
    </div>
  );
};

export default OpenableQuestion;
