import React from "react";
import "./blogCard.scss";
const BlogCard = (props) => {
  const { image, title, text, time } = props;
  return (
    <div className="col-lg-4 col-md-6 blog-card-item">
      <div class="card">
        <img src={image} class="card-img-top" alt="img" />
        <div class="card-body">
          <div class="blog-title">
            <h3>{title}</h3>
            <p class="card-title">
              Posted by{" "}
              <a href="https://themeforest.net/item/embark-wordpress-theme-for-tour-companies/20216095?irgwc=1&clickid=3BgW1d3sRxyNTbgQNSSAlymTUkAyD41o1UE%3Aw80&iradid=275988&irpid=319047&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_319047&utm_medium=affiliate&utm_source=impact_radius">
                Themovation
              </a>
            </p>
            <p class="card-text">{text}</p>
          </div>
          <div className="time">
            <p>{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
