import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Row from "react-bootstrap/Row";
import "./header.css";
import { Link } from "react-router-dom";
import MenuList from "./dropdownmenuList";
import SubMenu from "./submenu";
function HeaderBottom() {
  function handleOver(e) {
    e.preventDefault();
    var menu = document.getElementById("Dropdown");
    menu.classList.remove("hidden");
  }
  function mouseoverList(e) {
    var menu = document.getElementById("Dropdown");
    var submenu = document.getElementById("subMenu");
    submenu.classList.remove("hidden");
  }
  function handleOut(e) {
    e.preventDefault();
    var listShow = document.getElementById("Dropdown");
    var submenu = document.getElementById("subMenu");
    listShow.classList.add("hidden");
    submenu.classList.add("hidden");
  }
  function mouseOutList(e) {
    var submenu = document.getElementById("subMenu");
    submenu.classList.add("hidden");
  }
  return (
    <>
      <div class="headerBottom">
        <ul class="leftMenu">
          <li onMouseOver={handleOver}>
            All Categories <i class="fas fa-bars"></i>
          </li>
          <li>Top Selling</li>
          <li>Top Ranking</li>
          <li>Feeds</li>
          <li>Our Team</li>
          <li>About Us</li>
          <li>
            Services
            <i className="fas fa-angle-down" />
          </li>
        </ul>
      </div>
      <>
        <div
          id="Dropdown"
          className="AllCatDropMenu hidden"
          onMouseOver={(handleOver, mouseoverList)}
        >
          <MenuList name="Machinery" />
          <MenuList name="Clothing" />
          <MenuList name="Farm Product" />
          <MenuList name="Livestock" />
          <MenuList name="Shoes" />
          <MenuList name="Raw Material" />
          <MenuList name="Insurance" />
          <MenuList name="Home Appliance" />
          <MenuList name="Electonics" />
          <MenuList name="Vehicle Parts" />
          <MenuList name="Travel" />
          <MenuList name="Medical" />
          <MenuList name="Life and properties" />
          <MenuList name="Real Estate" />
          <MenuList name="anything Jare" />
        </div>
        <div id="subMenu" className="hidden" onMouseOut={handleOut}>
          <div className="SubMenu">
            <SubMenu
              header="All Machines"
              list1="Machinery Agriculture Machinery"
              list2="Equipment Air-Compressors"
              list3="Parts Apparel"
              list4="Textile Machinery Building Material Machinery
              Chemical"
              list5="Pharmaceutical Machinery Cleaning Equipment"
            />
            <SubMenu
              header="Used Machines"
              list1="Uk Used"
              list2="Naija Used"
              list3="used o"
              list4="USed"
              list5="USed"
              list6="USed noni"
              list7="USed"
            />
          </div>
          <div className="SubMenu">
            <SubMenu
              header="Placeholder"
              list1="Placeholder1"
              list2="Placeholder2"
              list3="Placeholder3"
              list4="Placeholder4"
              list5="Placeholder5"
              list6="Placeholder6"
              list7="Placeholder7"
              list8="Placeholder8"
            />
            <SubMenu
              header="All Machines"
              list1="Machinery Agriculture Machinery"
              list2="Equipment Air-Compressors"
              list3="Parts Apparel"
              list4="Textile Machinery Building Material Machinery
              Chemical"
              list5="Pharmaceutical Machinery Cleaning Equipment"
            />
          </div>
        </div>
      </>
    </>
  );
}

export default HeaderBottom;
