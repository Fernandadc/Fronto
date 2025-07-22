import React from "react";
import "./App.scss";
import { Router, Route, Routes, useNavigate } from "react-router-dom";
import loc from "./assets/localization";
import Header from "./components/header";
import Homepage from "./pages/homepage";
import Contact from "./pages/contact";
import Services from "./pages/services";
import About from "./pages/about";
import { useLocation } from "react-router-dom";

function App(props) {

  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <>
    
    <div className="container">
      <Header isContactPage={isContactPage}/>

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>

      
      </div>
    </>
  );
}

export default App;
