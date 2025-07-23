import React from "react";
import loc from "../assets/localization";
import { Link } from "react-router-dom";
import { useState } from 'react';

function Header({ isContactPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={isContactPage ? "header-contact" : ""}>
      {/* Botão do menu hamburguer (só aparece no mobile) */}
      <div className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? '✕' : '☰'} {/* Ícone que muda para X quando aberto */}
      </div>

      <ul className={`content-menu noto-sans-font ${isMenuOpen ? 'menu-open' : ''}`}>
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
