import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import loc from "../assets/localization";


function Footer() {
  return (
     <footer>
    <div class="footer-content">
      <a href="#" class="logo">Fronto</a>
      <p>Desenvolvimento Frontend de Alta Performance.</p>
      <div class="social-icons">
        <a href="#"><i data-feather="linkedin"></i></a>
        <a href="#"><i data-feather="github"></i></a>
      </div>
      <p class="copyright">© 2024 Fronto. Todos os direitos reservados.</p>
    </div>
  </footer>
  );
}

export default Footer;
 