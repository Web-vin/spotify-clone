import React from "react";
import "../css/style.css";
import image from "../img/logo.png"
function Header() {
  return (
    <div>
        <img className="img" src={image} alt="logo here" />
      <header>
      
        <nav className="navbar">
        
          <ul>
            <li>icon</li>
            <li>
              <input type="search" />
            </li>
          </ul>
        </nav>
        <div className="top-right-buttons">
          <button className="btn">signup</button>
          <button className="btn">login</button>
        </div>
      </header>
     
    </div>
  );
}

export default Header;
