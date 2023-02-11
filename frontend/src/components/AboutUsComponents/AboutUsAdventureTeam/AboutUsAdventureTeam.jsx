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

        <div className="col-4 adventure">
          <div class="card">
            <img src={rachel} class="card-img-top" alt="rachel" />
            <div class="card-body">
              <div class="adventurer-info">
                <h4>Rachel Rafter</h4>
                <p class="card-title">Equipment</p>
                <p class="card-text">
                  Nulla vitae elit libero, a pharetra augue. Sed posuere
                  consectetur est at lobortis.
                </p>
              </div>
              <div className="adventurer-social-media">
                <FaFacebookF />
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>

        <div className="col-4 adventure">
          <div class="card">
            <img src={rocky} class="card-img-top" alt="rocky" />
            <div class="card-body">
              <div class="adventurer-info">
                <h4>Rocky River</h4>
                <p class="card-title">Equipment</p>
                <p class="card-text">
                  Nulla vitae elit libero, a pharetra augue. Sed posuere
                  consectetur est at lobortis.
                </p>
              </div>
              <div className="adventurer-social-media">
                <FaInstagram />
                <FaFacebookF />
              </div>
            </div>
          </div>
        </div>

        <div className="col-4 adventure bottom-row">
          <div class="card">
            <img src={rachel2} class="card-img-top" alt="rachel" />
            <div class="card-body">
              <div class="adventurer-info">
                <h4>Rachel Rafter</h4>
                <p class="card-title">Equipment</p>
                <p class="card-text">
                  Nulla vitae elit libero, a pharetra augue. Sed posuere
                  consectetur est at lobortis.
                </p>
              </div>
              <div className="adventurer-social-media">
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>

        <div className="col-4 adventure bottom-row">
          <div class="card">
            <img src={rocky2} class="card-img-top" alt="rocky" />
            <div class="card-body">
              <div class="adventurer-info">
                <h4>Rocky River</h4>
                <p class="card-title">Equipment</p>
                <p class="card-text">
                  Nulla vitae elit libero, a pharetra augue. Sed posuere
                  consectetur est at lobortis.
                </p>
              </div>
              <div className="adventurer-social-media">
                <FaFacebookF />
              </div>
            </div>
          </div>
        </div>

        <div className="col-4 adventure bottom-row">
          <div class="card">
            <img src={rocky3} class="card-img-top" alt="rocky" />
            <div class="card-body">
              <div class="adventurer-info">
                <h4>Rocky River</h4>
                <p class="card-title">Equipment</p>
                <p class="card-text">
                  Nulla vitae elit libero, a pharetra augue. Sed posuere
                  consectetur est at lobortis.
                </p>
              </div>
              <div className="adventurer-social-media">
                <FaFacebookF />
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsAdventureTeam;
