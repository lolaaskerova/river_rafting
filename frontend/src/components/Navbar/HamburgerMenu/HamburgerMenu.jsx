import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./hamburger.scss";
const HamburgerMenu = ({ toggle }) => {
  const [click, setClick] = useState(false);
  const [shopClick, setShopClick] = useState(false);
  let activeHamburger = {
    display: "block",
  };
  let activeShop = {
    display: "block",
  };
  let hamburgerMenu = {
    display: "block",
  };
  return (
    <div className="hamburger-menu" style={toggle ? hamburgerMenu : undefined}>
      <div className="hamburger-content">
        <Link className="hamburger_link" to="/">
          Home
        </Link>
        <Link className="hamburger_link" to="/tours">
          Tours
        </Link>
        <a id="pages" href="#" onClick={() => setClick(!click)}>
          Pages ·
          <ul
            className="hamburger-pages"
            style={click ? activeHamburger : undefined}
          >
            <li>
              <Link className="dropdown_content" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="dropdown_content" to="/package">
                Packages & Specials
              </Link>
            </li>
            <li>
              <Link className="dropdown_content" to="/gallery">
                Gallery
              </Link>
            </li>
            <li>
              <Link className="dropdown_content" to="/faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="dropdown_content" to="/gethere">
                Getting Here
              </Link>
            </li>
            <li>
              <Link className="dropdown_content" to="/careers">
                Careers
              </Link>
            </li>
            <li>
              <Link className="dropdown_content" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </a>
        <Link className="hamburger_link" to="/features">
          Features
        </Link>
        <Link
          className="hamburger_link shop"
          to="/shop"
          onClick={() => setShopClick(!shopClick)}
        >
          Shop ·
          <ul
            className="hamburger_shop-dropdown"
            style={shopClick ? activeShop : undefined}
          >
            <Link className="dropdown-content" to="/basket">
              Basket
            </Link>
          </ul>
        </Link>

        <Link className="hamburger_link" to="/blog">
          Blog
        </Link>
        <a
          href="https://themeforest.net/item/embark-wordpress-theme-for-tour-companies/20216095?irgwc=1&clickid=3BgW1d3sRxyNTbgQNSSAlymTUkA3sW0M1UE8yE0&iradid=275988&irpid=319047&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_319047&utm_medium=affiliate&utm_source=impact_radius"
          id="purchase"
        >
          Purchase
        </a>
      </div>
    </div>
  );
};

export default HamburgerMenu;
