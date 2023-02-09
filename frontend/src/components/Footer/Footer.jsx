import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiMessageRounded } from "react-icons/bi";
import { HiOutlineMap } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row footer-content">
            <div className="col-xl-4 col-lg-6 col-md-12 footer-first-section">
              <div className="footer-about">
                <h5>About Us</h5>
                <div className="footer-about-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    vitae ornare massa, at consequat ipsum. Sed ullamcorper, dui
                    consequat vehicula volutpat dolor.
                  </p>
                </div>
              </div>
              <div className="footer-payment">
                <h5>Payment Accepted</h5>
                <div className="payment-methods">
                  <a href="">Visa</a>
                  <a href="">PayPal</a>
                  <a href="">MasterCard</a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 footer-second-section">
              <div className="footer-contact">
                <h5>Contact Info</h5>
                <div className="contact-links">
                  <div className="contact-link">
                    <HiOutlineMailOpen />
                    <a href="">contact@embark.com</a>
                  </div>
                  <div className="contact-link">
                    <BiMessageRounded />
                    <a href="">1-800-222-4545</a>
                  </div>
                  <div className="contact-link">
                    <HiOutlineMap />
                    <Link to="/contact">Location</Link>
                  </div>
                </div>
              </div>
              <div className="footer-social">
                <h5>Be Social</h5>
                <div className="social-media">
                  <a href="https://www.facebook.com/themovation">
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com/themovation">
                    {" "}
                    <FaTwitter />
                  </a>
                  <a href="http://localhost:3000/">
                    {" "}
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 footer-third-section">
              <div className="footer-recent-post">
                <h5>Recent Posts</h5>
                <div className="footer-recent">
                  <a href="">Our Essential Rafting Tips</a>
                  <span>April 20, 2017</span>
                </div>
                <div className="footer-recent">
                  <a href="">Top Camping Destinations Reviewed</a>
                  <span>April 15, 2017</span>
                </div>
                <div className="footer-recent">
                  <a href="">Multi-Day vs Single-Day Rafting Trips</a>
                  <span>April 10, 2017</span>
                </div>
                <div className="footer-recent">
                  <a href="">The Rafting Experience</a>
                  <span>April 5, 2017</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <h6>
          Made With <FiHeart /> by{" "}
          <a href="https://themeforest.net/user/themovation/portfolio">
            TheMovation
          </a>
        </h6>
      </div>
    </>
  );
};

export default Footer;
