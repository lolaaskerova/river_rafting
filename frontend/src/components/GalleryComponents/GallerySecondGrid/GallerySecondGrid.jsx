import React from "react";
import SecondGridModal from "../../SecondGridModal/SecondGridModal";
import "./gallerySecondGrid.scss";
import modal1 from "../../../assets/images/secondmodal1.jpg";
import modal2 from "../../../assets/images/secondmodal2.jpg";
import modal3 from "../../../assets/images/secondmodal3.jpg";
import modal4 from "../../../assets/images/secondmodal4.jpg";
const GallerySecondGrid = () => {
  return (
    <div className="container gallery-second-grid">
      <div className="second-grid-title">
        <h3>2 COLUMN GRID </h3>
        <p>
          For over 55 years, Thrillz Co. has gained more experience organizing
          rafting trips down the Chilko, than any other local rafting company.
          Etiam porta sem malesuada magna mollis euismod.
        </p>
      </div>
      <div className="row second-grid-content">
        <SecondGridModal image={modal1} />
        <SecondGridModal image={modal2} />
        <SecondGridModal image={modal3} />
        <SecondGridModal image={modal4} />
      </div>
    </div>
  );
};

export default GallerySecondGrid;
