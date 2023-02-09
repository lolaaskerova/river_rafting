import React from "react";
import "./homeFeedBack.scss";
import firstComment from "../../../assets/images/firstComment.jpg";
import secondComment from "../../../assets/images/secondComment.jpg";
const HomeFeedBack = () => {
  return (
    <div className="home-feed-back">
      <div className="container all-feed-back">
        <div className="first-comment">
          <div className="comment">
            <p>
              “We had such a great time. Everything went over smoothly and our
              guide was very knowledgeable. I would absolutely recommend them to
              anyone. They really exceeded my expectations. I know I'll be back
              for sure!”
            </p>
          </div>
          <div className="user">
            <div className="user-profile">
              <img src={firstComment} alt="userimg" />
            </div>
            <div className="about-user">
              <h5>Amy Johnson</h5>
              <h6>Adventurer</h6>
            </div>
          </div>
        </div>
        <div className="second-comment">
          <div className="comment second-user">
            <p>
              “Amazing trip; Great whitewater, food, and awesome guides. We had
              an excellent trip. Big group, but easily accommodated by Thrillz
              Co. The food was amazing, the weather was perfect, and the rafting
              was fun”
            </p>
          </div>
          <div className="user">
            <div className="user-profile">
              <img src={secondComment} alt="userimg" />
            </div>
            <div className="about-user">
              <h5>Doug Martin</h5>
              <h6>Adventurer</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeedBack;
