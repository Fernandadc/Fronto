import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import loc from "../assets/localization";
import { Link } from "react-router-dom";

function Header({ isContactPage }) {

  return (
    <header className={isContactPage ? "header-contact" : ""}>

      <ul className="content-menu noto-sans-font">
        <li>
          <a href="">Logo</a>
        </li>
        <nav className="nav-menu">
          <li className="nav-li">
            <Link to="/">{loc.commonHome}</Link>
          </li>
          <li className="nav-li">
            <Link to="/services">{loc.headerServices}</Link>
          </li>

          <li className="nav-li">
            <Link to="/contact">{loc.headerContact}</Link>
          </li>

          <li className="nav-li">
            <Link to="/about">{loc.headerAboutUs}</Link>
          </li>
        </nav>
      </ul>

    </header>
  );
}

export default Header;
