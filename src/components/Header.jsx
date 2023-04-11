import React from "react";
import "../styles/Header.css";
import vector from "../img/vector.png";
import logo from "../img/logo.png"

const Header = () => {
  return (
    <header>
      <div className="name">
        <img src={logo} alt="logo" />
        <h3>Tech Solutions</h3>
      </div>
      <div className="container">
        <div className="text-container">
          <h1>How to Fix a Windows Blue Screen of Death (BSOD)</h1>
          <span>By Tech Solutions last updated April 07, 2023  </span>
          <h2>Find out why you got a BSOD and how to stop it.</h2>
        </div>
        <div className="image-header">
          <img src={vector} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
