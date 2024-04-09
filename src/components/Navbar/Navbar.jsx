import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="container">
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Products</a>
        </li>
        <li>
          <a href="">Testimonials</a>
        </li>
        <li>
          <a href="">Reviews</a>
        </li>
        <li>
          <a href="">Account</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
