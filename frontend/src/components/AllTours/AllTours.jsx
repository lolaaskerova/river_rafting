import React from "react";
import "./allTours.scss";
import riverrock from "../../assets/images/riverrock.jpg";
import waterfall from "../../assets/images/waterfall.jpg";
import camping from "../../assets/images/camping.jpg";
import AllToursItem from "../AllToursItem//AllToursItem";
const AllTours = () => {
  return (
    <div className="row all-tours">
      <AllToursItem
        time={"6 hours"}
        heading={"River Rock Tour"}
        image={riverrock}
      />
      <AllToursItem time={"2 days"} heading={"Camping Tour"} image={camping} />
      <AllToursItem
        time={"8 hours"}
        heading={"Waterfall Tour"}
        image={waterfall}
      />
    </div>
  );
};

export default AllTours;
