import React from 'react';
import './Navbar.css';
import Downbutton from './donwbutton';
import logo from "../../assets/logo.png";
export default function Navbar() {
  return (
    <nav className="navbar">

      {/* Left side - Logo */}
      <div className="logoContainer">
        <img src={logo} alt="logo" className="logo"/>
        <span className="logoText">Squid</span>
      </div>

      {/* Right side */}
      <div className="rightSection">
        <a href="#" className="homeLink">
          Home
        </a>

       
        <Downbutton />
      </div>

    </nav>
  );
}
