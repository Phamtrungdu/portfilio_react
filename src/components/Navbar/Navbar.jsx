import React, { useState } from "react";
import "./Navbar.css";
// import MobileNav from "./MobileNav/MobileNav";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  // const toggleMenu = () => {
  //   setOpenMenu(!openMenu);
  // };
  return (
    <>
      {/* <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} /> */}
      <nav className="nav-wrapper">
        <div className="desktopMenu nav-content">
          <img className="logo" src="./assets/images/logo.png"></img>
          <div
            className="menu"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={openMenu ? "open" : ""}>
            <li>
              <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="desktopMenuListItem menu-item"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="desktopMenuListItem menu-item"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="desktopMenuListItem menu-item"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="desktopMenuListItem menu-item"
              >
                Work Experience
              </Link>
            </li>
            <button
              className="desktopMenuListItem contact-btn"
              onClick={() => {
                document
                  .getElementById("contact-me")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Me
            </button>
          </ul>
          {/* <button
            className="desktopBtn menu-btn"
            onClick={() => {
              document
                .getElementById("contact-me")
                .scrollIntoView({ behavior: "smooth" });
            }}
          ></button> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
