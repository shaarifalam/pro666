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
          <button className="btn">Account</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
