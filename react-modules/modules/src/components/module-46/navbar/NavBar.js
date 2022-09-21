import React from "react";

import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/About us">About Us</a>
          </li>
          <li>
            <a href="/Contact Us">Contact us</a>
          </li>
          <li>
            <a href="/Register">Register now</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
