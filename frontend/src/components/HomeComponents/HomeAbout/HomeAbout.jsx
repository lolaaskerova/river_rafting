import React from "react";
import "./homeAbout.scss";
import raft from "../../../assets/images/raft.png";
const HomeAbout = () => {
  return (
    <div className="home-about container">
      <div className="raft-icon">
        <img src={raft} alt="raft" />
      </div>
      <div className="raft-title">
        <h1>WHY ADVENTURE RAFTING</h1>
      </div>
      <div className="raft-text">
        <p>
          Come and join the thrill and excitement of white water rafting with
          the adventure rafting team! We explore the best the Chilko River has
          to offer with thrilling rapids, overnight adventures and sightseeing
          that you will only see here. Book your tickets today!
        </p>
      </div>
    </div>
  );
};

export default HomeAbout;
