import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import "./header.css";
import { Link } from "react-router-dom";
import Links  from "../formComponents/Links";

function HeaderBottom() {
  
  return (
    <>
      <div class="headerBottom">
        <ul class="leftMenu">
          <li>
            All Categories <i class="fas fa-bars"></i>
          </li>
          <li>Top Selling</li>
          <li>Top Ranking</li>
          <li>
            Services <i className="fas fa-angle-down" />
          </li>
          <li>Feeds</li>
          <li>Our Team</li>
          <li>About Us</li>
        </ul>
      </div>
      <></>
    </>
  );
}

export default HeaderBottom;
