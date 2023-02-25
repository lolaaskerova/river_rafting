import React, { useState } from "react";
import "./gettingHereDirectionItem.scss";
import { FaRegCircle } from "react-icons/fa";
const GettingHereDirectionItem = (props) => {
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
    <div className="direction-content">
      <div className="heading">
        <FaRegCircle />
        <span
          onClick={() => {
            changeNumber();
          }}
        >
          {title}
        </span>
      </div>
      <div className={open ? "text-view text" : "text"}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default GettingHereDirectionItem;
