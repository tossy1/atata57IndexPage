import React, { Component } from "react";
import "./acoounts.css";
import { Link } from 'react-router-dom';
import Logo2 from "../logoComponents/logo2";

class MainScreen extends Component {
  render() {
    return (
      <div className="main overflow">
        <div className="logo">
          <Logo2 />
        </div>
        <div className="Navigator">
          <ul>
            <Link to="/SignIn">
              <li>Sign In</li>
            </Link>
            <span>| </span>
            <li>Register</li>
          </ul>
        </div>
        <hr />
        <div className="socialLinks">
          <a href="https://web.facebook.com/atata57">
            <i className="fas fa-building"></i>
          </a>
          <a href="https://twitter.com/atata57">
            <i className="fab fa-twitter-square"></i>
          </a>
          <i className="fab fa-linkedin hidden"></i>
          <a href="https://www.instagram.com/atata57synergy/">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default MainScreen;
