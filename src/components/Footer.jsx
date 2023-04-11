import React from "react";
import "../styles/Footer.css";
import Tech from "../img/Tech.png";

//REMIX ICON
import "remixicon/fonts/remixicon.css";
const Footer = () => {
  return (
    <footer className="pie-pagina">
      <div className="grupo-1">
        <div className="box">
          <figure>
            <a href="#">
              <img src={Tech} alt="" />
            </a>
          </figure>
        </div>
        <div className="box">
          <h2>Credits:</h2>
          <p>
            <span>Core Developers:</span> Luis Daniel Sánchez Zúñiga & Nathaly Nicole Abarca
            Espinoza
          </p>
          <p>
           <span>Graphic designers:</span> Luis Daniel Sánchez Zúñiga & Nathaly Nicole
            Abarca Espinoza
          </p>
          <p>
            <span>Special thanks:</span> We thank all those who have contributed to this
            project with their time, effort and knowledge.
          </p>
        </div>
        <div className="box">
          <h2>Follow</h2>
          <div className="red-social">
            <a href="#" className="ri-github-line"></a>
            <a href="#" className="ri-linkedin-line"></a>
            <a href="#" className="ri-twitter-line"></a>
            <a href="#" className="ri-instagram-line"></a>
          </div>
        </div>
      </div>
      <div className="grupo-2">
        <small>
          &copy; 2023 <b>Tech Solutions</b> - All rights reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
