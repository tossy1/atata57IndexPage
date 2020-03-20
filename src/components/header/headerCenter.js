import React, { Component } from 'react';
import './header.css';
import HeaderLogo from '../logoComponents/headerLogo'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class HeaderCenter extends Component {
  render() {
    return (
        <div class="headerCenter">
                <nav class="logo">
                     <HeaderLogo />
                </nav>
                <nav class="search" id="search">
                <select name="categories" id="headerCategories">
                    <option value="AllCategories">All categories</option>
                    <option value="Mens">Mens</option>
                    <option value="Women">Women</option>
                    <option value="Children">Children</option>
                    <option value="Electronic">Electronic</option>
                    <option value="MadeInAfrica">Made in Africa</option>
                    <option value="Imported">Imported</option>
                </select>
                <input type="search" name="searchColumn" id="searchColumn" placeholder="Enter Items to search" />
                <button id="searchButton">
                    <i class="fa fa-search"></i>
                </button>
            </nav>
            <nav class="contact">
                {/* <FontAwesomeIcon icon="fa fa-facebook" />  */}Atata57
            </nav>
        </div>
        
    );
  }
}

export default HeaderCenter;