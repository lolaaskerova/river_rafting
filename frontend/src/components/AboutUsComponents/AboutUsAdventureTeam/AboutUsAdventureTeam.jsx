import React from "react";
import "./aboutUsAdventureTeam.scss";
import map from "../../../assets/images/map.png";
import rachel from "../../../assets/images/rachel.jpg";
import rachel2 from "../../../assets/images/rachel2.jpg";
import rocky from "../../../assets/images/rocky.jpg";
import rocky2 from "../../../assets/images/rocky2.jpg";
import rocky3 from "../../../assets/images/rocky3.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import AdventureTeamItem from "./AdventureTeamItem";
const AboutUsAdventureTeam = () => {
  return (
    <div className=" container adventure-team">
      <div className="row">
        <div className="col-4 about-us-map">
          <div className="map-logo">
            <img src={map} alt="map" />
          </div>
          <div className="text">
            <h3>Adventure Team</h3>
            <p>
              Shuttle to and from rafting trip. Store your belongings safely.
            </p>
          </div>
        </div>
        <AdventureTeamItem
          img={rachel}
          name={"Rachel Rafter"}
          speciality={"Equipment"}
          text={
            "Nulla vitae elit libero, a pharetra augue. Sed posuereconsectetur est at lobortis."
          }
          icon1={<FaFacebookF />}
          icon2={<FaTwitter />}
        />

        <AdventureTeamItem
          img={rocky}
          name={"Rocky River"}
          speciality={"Equipment"}
          text={
            "Nulla vitae elit libero, a pharetra augue. Sed posuereconsectetur est at lobortis."
          }
          icon1={<FaInstagram />}
          icon2={<FaFacebookF />}
        />

        <AdventureTeamItem
          img={rachel2}
          name={"Rachel Rafter"}
          speciality={"Equipment"}
          text={
            "Nulla vitae elit libero, a pharetra augue. Sed posuereconsectetur est at lobortis."
          }
          icon1={<FaTwitter />}
        />

        <AdventureTeamItem
          img={rocky2}
          name={"Rocky River"}
          speciality={"Equipment"}
          text={
            "Nulla vitae elit libero, a pharetra augue. Sed posuereconsectetur est at lobortis."
          }
          icon1={<FaFacebookF />}
        />

        <AdventureTeamItem
          img={rocky3}
          name={"Rocky River"}
          speciality={"Equipment"}
          text={
            "Nulla vitae elit libero, a pharetra augue. Sed posuereconsectetur est at lobortis."
          }
          icon1={<FaFacebookF />}
          icon2={<FaYoutube />}
        />
      </div>
    </div>
  );
};

export default AboutUsAdventureTeam;
