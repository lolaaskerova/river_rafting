import React, { useEffect } from "react";
import "./ourTours.scss";
import AllTours from "../AllTours/AllTours";
import axios from "axios";
import { useState } from "react";
const OurTours = (props) => {
  const { title } = props;
  const [sorted, setSorted] = useState({ sorted: "time", reversed: false });
  const [tours, setTours] = useState([]);
  const BASE_URL = "http://localhost:7777/tour";

  const allData = async () => {
    const res = await axios.get(BASE_URL);
    setTours(res.data);
  };

  useEffect(() => {
    allData();
  }, []);
  //sorting advanced
  const sortAdvancedTours = async () => {
    const advancedTours = tours.filter((t) => {
      return t.time < 24;
    });
    setTours(advancedTours);
  };

  //sorting 'multi days'
  const sortTours = async () => {
    const sortedTours = tours.filter((t) => {
      return t.time > 24;
    });
    setTours(sortedTours);
  };

  // sorting all and rapids
  const sortAllTours = () => {
    allData();
  };

  return (
    <div className="our-tours-part">
      <div className="tours-container">
        <div className="our-tours-content">
          <div className="tours-content-top">
            <div className="our-tours-titles">
              <h2>{title}</h2>
              <p>
                Enjoy a full guided, catered camping with delicious meals. Come
                and join the thrill and excitement of white water rafting with
                the team!
              </p>
            </div>
          </div>
          <div className="tours-content-bottom">
            <div className="our-tours-sorting">
              <span>Sort :</span>
              <button onClick={() => sortAllTours()}>All</button>
              <button onClick={() => sortAdvancedTours()}>Advanced</button>
              <button onClick={() => sortTours()}>Multi - Day</button>
              <button onClick={() => sortAllTours()}>Rapids</button>
            </div>
            <AllTours tours={tours} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTours;
