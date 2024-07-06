import React from "react";
import "./Navbar.css";
import navImage from "../../assets/images/image.png"; // Make sure to replace with the actual path

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={navImage} alt="HamroCSIT Logo" />
      </div>
      <ul className="navbar-menu">
        <li>
          <a href="#">Entrance</a>
        </li>
        <li>
          <a href="#">Semester</a>
        </li>
        <li>
          <a href="#">Questions</a>
        </li>
        <li>
          <a href="#">Subscription</a>
        </li>
        <li>
          <a href="#">Notices</a>
        </li>
        <li>
          <a href="#">Articles</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
      </ul>
      <div className="navbar-account">
        <button className="account-button">Account</button>
      </div>
    </nav>
  );
};

export default Navbar;
