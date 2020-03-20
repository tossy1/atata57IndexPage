import React, { Component } from 'react';
import './header.css';

class HeaderBottom extends Component {
  render() {
    return (
        <nav class="headerBottom">
        <ul class="leftMenu">
            <li>
               All Categories 
            </li>
            <li>Clothings</li>
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Home and Kitchen</li>
            <li>Drinks</li>
            <li>Mens</li>
            <li>Women</li>
        </ul>
    </nav>
        
    );
  }
}

export default HeaderBottom;