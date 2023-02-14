import React from "react";
import "./feedBack.scss";
const FeedBack = (props) => {
  const { comment, userImg, userName, userProfession, fontSize } = props;
  return (
    <div className="comment-field">
      <div className="comment">
        <p style={{ fontSize: fontSize }}>{comment}</p>
      </div>
      <div className="user">
        <div className="user-profile">
          <img src={userImg} alt="userimg" />
        </div>
        <div className="about-user">
          <h5>{userName}</h5>
          <h6>{userProfession}</h6>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
