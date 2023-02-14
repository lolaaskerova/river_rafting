import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./hamburger.scss";
const HamburgerMenu = ({ setToggle, toggle }) => {
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
              <Link
                className="dropdown_content"
                to="/about"
                onClick={() => setToggle(!toggle)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="dropdown_content"
                to="/package"
                onClick={() => setToggle(!toggle)}
              >
                Packages & Specials
              </Link>
            </li>
            <li>
              <Link
                className="dropdown_content"
                to="/gallery"
                onClick={() => setToggle(!toggle)}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                className="dropdown_content"
                to="/faq"
                onClick={() => setToggle(!toggle)}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                className="dropdown_content"
                to="/gethere"
                onClick={() => setToggle(!toggle)}
              >
                Getting Here
              </Link>
            </li>
            <li>
              <Link
                className="dropdown_content"
                to="/careers"
                onClick={() => setToggle(!toggle)}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                className="dropdown_content"
                to="/contact"
                onClick={() => setToggle(!toggle)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </a>
        <Link
          className="hamburger_link"
          to="/features"
          onClick={() => setToggle(!toggle)}
        >
          Features
        </Link>
        <a
          href="#"
          className="hamburger_link shop"
          onClick={() => {
            setShopClick(!shopClick);
          }}
        >
          Shop ·
          <ul
            className="hamburger_shop-dropdown"
            style={shopClick ? activeShop : undefined}
          >
            <li>
              <Link className="dropdown-content" to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="dropdown-content" to="/basket">
                Basket
              </Link>
            </li>
            <li>
              <Link className="dropdown-content" to="/check">
                Check Out
              </Link>
            </li>
          </ul>
        </a>

        <Link
          className="hamburger_link"
          to="/blog"
          onClick={() => setToggle(!toggle)}
        >
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
