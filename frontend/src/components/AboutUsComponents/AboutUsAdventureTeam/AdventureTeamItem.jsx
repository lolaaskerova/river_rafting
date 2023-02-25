import React from "react";

const AdventureTeamItem = (props) => {
  const { img, name, speciality, text, icon1, icon2 } = props;
  return (
    <div className="col-4 adventure">
      <div className="card">
        <img src={img} className="card-img-top" alt="rachel" />
        <div className="card-body">
          <div className="adventurer-info">
            <h4>{name}</h4>
            <p className="card-title">{speciality}</p>
            <p className="card-text">{text}</p>
          </div>
          <div className="adventurer-social-media">
            {icon1} {icon2}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureTeamItem;
