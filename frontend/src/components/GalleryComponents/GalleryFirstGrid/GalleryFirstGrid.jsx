import React from "react";
import "./galleryFirstGrid.scss";
import FirstGridModal from "../../FirstGridModal/FirstGridModal";
import modal1 from "../../../assets/images/firstmodal1.jpg";
import modal2 from "../../../assets/images/firstmodal2.jpg";
import modal3 from "../../../assets/images/firstmodal3.jpg";
import modal4 from "../../../assets/images/firstmodal4.jpg";

const GalleryFirstGrid = () => {
  return (
    <div className="container gallery-first-grid">
      <div className="first-grid-title">
        <h3>3 COLUMN GRID</h3>
        <p>
          For over 55 years, Thrillz Co. has gained more experience organizing
          rafting trips down the Chilko, than any other local rafting company.
          Etiam porta sem malesuada magna mollis euismod.
        </p>
      </div>
      <div className="row first-grid-content">
        <FirstGridModal image={modal1} />
        <FirstGridModal image={modal2} />
        <FirstGridModal image={modal3} />
        <FirstGridModal image={modal4} />
        <FirstGridModal image={modal1} />
        <FirstGridModal image={modal2} />
      </div>
    </div>
  );
};

export default GalleryFirstGrid;
