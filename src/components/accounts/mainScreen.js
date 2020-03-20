import React, { Component } from "react";
import "./acoounts.css";
import Modal from "../formComponents";
import Logo2 from "../logoComponents/logo2";

class MainScreen extends Component {
  render() {
    return (
      <Modal>
        <div className="main hidden overflow">
          <div className="logo">
            <Logo2 />
          </div>
          <div className="Navigator">
            <ul>
              <li>Sign In</li>
              <span>| </span>
              <li>Register</li>
            </ul>
          </div>
          <hr />
          <div className="socialLinks">
            <a href="https://web.facebook.com/atata57">fas fa-building</a>
            <a href="https://twitter.com/atata57">
              <i className="fab fa-twitter-square"></i>
            </a>
            <i className="fab fa-linkedin hidden"></i>
            <a href="https://www.instagram.com/atata57synergy/">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </Modal>
    );
  }
}

export default MainScreen;
