import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";
import { BiShoppingBag } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/images/logo.png";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

const Navbar = () => {
  const location = useLocation();
  console.log(location);
  //   const [navbar, setNavbar] = useState(false);
  const [scrollBg, setScrollBg] = useState(false);

  //changable navbar color for page
  //   useEffect(() => {
  //     if (
  //       location.pathname === "/gethere" ||
  //       location.pathname === "/contact" ||
  //       location.pathname === "*"
  //     ) {
  //       setNavbar(true);
  //     }
  //   }, [location]);

  //set navbar color on scroll
  const listenScrollEvent = () => {
    window.scrollY > 20 ? setScrollBg(true) : setScrollBg(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  //hamburger menu toggle
  const [toggle, setToggle] = useState(false);

  console.log(toggle);

  const bgCondition =
    location.key === "default" || location.pathname === "/contact";

  return (
    <>
      <nav
        className={scrollBg ? "scrolled-bg" : ""}
        id={bgCondition ? "nav-color" : ""}
      >
        <div className="navbar container">
          <div className="nav-left_side">
            <Link to="/">
              <img src={logo} alt="nav-logo" />
            </Link>
          </div>
          <div className="nav-right_side">
            <Link to="/">Home</Link>
            <Link to="/tours">Tours</Link>
            <span id="pages">
              Pages
              <ul className="pages">
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
            </span>
            <Link className="" to="/about">
              About Us
            </Link>
            <span className="shop">
              Shop
              <ul className="shop-dropdown">
                <Link className="dropdown-content" to="/shop">
                  Shop
                </Link>
                <Link className="dropdown-content" to="/basket">
                  Basket
                </Link>
                <Link className="dropdown-content" to="/check">
                  Check Out
                </Link>
              </ul>
            </span>

            <Link to="/blog">Blog</Link>
            <a
              href="https://themeforest.net/item/embark-wordpress-theme-for-tour-companies/20216095?irgwc=1&clickid=3BgW1d3sRxyNTbgQNSSAlymTUkA3sW0M1UE8yE0&iradid=275988&irpid=319047&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_319047&utm_medium=affiliate&utm_source=impact_radius"
              id="purchase"
            >
              Purchase
            </a>
            <div className="header-basket">
              <Link to="/basket">
                <BiShoppingBag id="basket" /> <sup>0</sup>
              </Link>
            </div>
          </div>
          <div className="nav-hamburger" onClick={() => setToggle(!toggle)}>
            <GiHamburgerMenu />
          </div>
        </div>
      </nav>
      <HamburgerMenu setToggle={setToggle} toggle={toggle} />
    </>
  );
};

export default Navbar;
