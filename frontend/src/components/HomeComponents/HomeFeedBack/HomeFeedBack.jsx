import React from "react";
import "./homeFeedBack.scss";
import firstComment from "../../../assets/images/firstComment.jpg";
import secondComment from "../../../assets/images/secondComment.jpg";
import FeedBack from "../../Comment/FeedBack";
const HomeFeedBack = () => {
  return (
    <div className="home-feed-back">
      <div className="container all-feed-back">
        <FeedBack
          comment="“We had such a great time. Everything went over smoothly and our guide was very knowledgeable. I would absolutely recommend them to anyone. They really exceeded my expectations. I know I'll be back for sure!”"
          userName="	
          Amy Johnson"
          userProfession="Adventurer"
          userImg={firstComment}
          fontSize="22px"
        />
        <FeedBack
          comment="“Amazing trip; Great whitewater, food, and awesome guides. We had an excellent trip. Big group, but easily accommodated by Thrillz Co. The food was amazing, the weather was perfect, and the rafting was fun”"
          userName="Doug Martin"
          userProfession="Adventurer"
          userImg={secondComment}
          fontSize="22px"
        />
      </div>
    </div>
  );
};

export default HomeFeedBack;
