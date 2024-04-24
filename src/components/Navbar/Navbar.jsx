import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="navlogo">
        <img src={logo} alt="" className="logo" />
        <h1>zeunext</h1>
      </div>
      <div className="navlinks"></div>
    </nav>
  );
};

export default Navbar;
