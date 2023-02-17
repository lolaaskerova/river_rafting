import React, { useEffect } from "react";
import { useState } from "react";
import { SlArrowUp } from "react-icons/sl";
import "./gotoTop.scss";
const GoToTop = () => {
  const [btn, setBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBtn(true);
      } else {
        setBtn(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {btn && (
        <button className="go-to-top" onClick={() => scrollToTop()}>
          <SlArrowUp />
        </button>
      )}
    </>
  );
};

export default GoToTop;
