import React, { Component } from "react";
import "./header.css";
// import Login from '../Accounts/Login';
// import { Link } from 'react-router-dom';

class HeaderTop extends Component {
  render() {
    return (
      <nav class="headerTop">
        <ul class="leftMenu">
          <li class="Menu1">
            <select name="language" id="language">
              <option value="English">English</option>
              <option value="Yoruba">Yoruba</option>
              <option value="French">French</option>
            </select>
          </li>
          <li class="Menu2">
            <select name="currency" id="currency">
              <option value="dollar">US dollar</option>
              <option value="Naira">NGN Naira</option>
            </select>
          </li>
        </ul>
        <ul class="rightMenu">
          <li className="LinkStyle">
            <i class="fa fa-heart"></i> My Wishlist
          </li>
          <li className="LinkStyle">
            <i class="fas fa-shopping-cart"></i> Cart
          </li>
          {/* <Link to={Login} ></Link> */}
          <li className="LinkStyle">
            <i className="fas fa-user-circle"></i> My Account
          </li>
        </ul>
      </nav>
    );
  }
}

export default HeaderTop;
