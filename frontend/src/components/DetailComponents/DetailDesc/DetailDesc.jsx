import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import "./detailDesc.scss";
import { useState } from "react";
import axios from "axios";
import COM_URL from "../../../API/commentUrl";
const DetailDesc = ({ tour }) => {
  const [star, setStar] = useState(0);
  const [hover, setHover] = useState(undefined);
  const [desc, setDesc] = useState(true);
  const [comment, setComment] = useState({
    name: "",
    email: "",
    review: "",
    rating: null,
  });
  //post comments
  const handleChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };
  const postComment = async () => {
    await axios.post(COM_URL, comment);
    setComment({
      name: "",
      email: "",
      review: "",
      rating: 0,
    });
  };

  //
  // rating stars
  const stars = Array(5).fill(0);
  const colors = {
    orange: "#ffa500",
    gray: "#c8c8c8",
  };
  const styles = {
    display: "flex",
    gap: "8px",
  };
  const handleStarClick = (value) => {
    setStar(value);
  };
  const handleMouseOver = (value) => {
    setHover(value);
  };
  const handleMouseLeave = () => {
    setHover(undefined);
  };

  //
  const handleClick = () => {
    setDesc(true);
  };
  const reviewClick = () => {
    setDesc(false);
  };
  return (
    <div className="row desc-review">
      <div className="col-lg-4 col-md-6 arrow">
        <div className="description">
          <h6
            onClick={() => handleClick()}
            className={desc ? "act-color" : "unact-color"}
          >
            Description
          </h6>
          <BsChevronRight className={desc ? "svg" : "svg-un"} />
        </div>
        <div className="review">
          <h6
            onClick={() => reviewClick()}
            className={desc ? "unact-color" : "act-color"}
          >
            Reviews (0)
          </h6>
          <BsChevronRight className={desc ? "svg-un" : "svg"} />
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div
          className="description-text"
          id={desc ? "active-content" : "unactive-content"}
        >
          <h4>Description</h4>
          <p>{tour.description}</p>
        </div>
        <div
          className="review-content"
          id={desc ? "unactive-content" : "active-content"}
        >
          <h4>Reviews</h4>
          <p>There are no reviews yet.</p>
          <div className="review-inner">
            <p id="tour-name">Be the first to review "{tour.name}"</p>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
            <div className="ratings">
              <h6>Your rating *</h6>
              <div style={styles.stars} className="stars">
                {stars.map((_, index) => (
                  <FaStar
                    key={index}
                    color={
                      (hover || star) > index ? colors.orange : colors.gray
                    }
                    onClick={() => handleStarClick(index + 1)}
                    onMouseOver={() => handleMouseOver(index + 1)}
                    onMouseLeave={handleMouseLeave}
                  />
                ))}
              </div>
            </div>
            <div className="review-input">
              <h6>Your review *</h6>
              <textarea
                onChange={handleChange}
                name="review"
                id=""
                cols="43"
                rows="8"
              ></textarea>
            </div>
            <div className="review-email">
              <div className="name">
                <h6>Name *</h6>
                <input type="text" onChange={handleChange} name="name" />
              </div>
              <div className="email">
                <h6>Email *</h6>
                <input type="email" onChange={handleChange} name="email" />
              </div>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
            <button onClick={() => postComment()}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDesc;
