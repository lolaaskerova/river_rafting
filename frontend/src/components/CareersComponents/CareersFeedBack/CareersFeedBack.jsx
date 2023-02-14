import React from "react";
import FeedBack from "../../Comment/FeedBack";
import "./careersFeedBack.scss";
import careersUser1 from "../../../assets/images/careersUser1.png";
import careersUser2 from "../../../assets/images/careersUser2.png";
import careersUser3 from "../../../assets/images/careersUser3.jpg";

const CareersFeedBack = () => {
  return (
    <div className="careers-feed-back-field">
      <div className="container">
        <div className="careers-feed-back-content">
          <div className="careers-feed-back">
            <FeedBack
              comment="“Amazing trip; Great whitewater, food, and awesome guides. We had an excellent trip. Big group, but easily accommodated by Thrillz Co. The food was amazing, the weather was perfect, and the rafting was fun”"
              userName="Doug Martin"
              userProfession="Adventurer"
              userImg={careersUser1}
              fontSize="18px"
            />
          </div>
          <div className="careers-feed-back">
            <FeedBack
              comment="“Amazing trip; Great whitewater, food, and awesome guides. We had an excellent trip. Big group, but easily accommodated by Thrillz Co. The food was amazing, the weather was perfect, and the rafting was fun”"
              userName="Doug Martin"
              userProfession="Adventurer"
              userImg={careersUser2}
              fontSize="18px"
            />
          </div>
          <div className="careers-feed-back">
            <FeedBack
              comment="“Amazing trip; Great whitewater, food, and awesome guides. We had an excellent trip. Big group, but easily accommodated by Thrillz Co. The food was amazing, the weather was perfect, and the rafting was fun”"
              userName="Doug Martin"
              userProfession="Adventurer"
              userImg={careersUser3}
              fontSize="18px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersFeedBack;
