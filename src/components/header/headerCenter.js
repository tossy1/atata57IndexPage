import React, { Component } from "react";
import "./header.css";
import RightMenu from "./rightMenu"
import HeaderLogo from "../logoComponents/headerLogo";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class HeaderCenter extends Component {
  render() {
    return (
      <div class="headerCenter">
        <div class="logo">
          <HeaderLogo />
        </div>
        <div class="search" id="search">
         
          <input
            type="search"
            name="searchColumn"
            id="searchColumn"
            placeholder="Search Goods, Company and insurance"
          />
          <button id="searchButton">
            <i class="fas fa-search"></i>
          </button>
        </div>
        
      </div>
    );
  }
}

export default HeaderCenter;
