import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import "./header.css";
import { Link } from "react-router-dom";
import Links  from "../formComponents/Links";

function HeaderBottom() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div class="headerBottom">
        <ul class="leftMenu">
          <li
            onClick={() => setOpen(!open)}
            aria-controls="Menu"
            aria-expanded={open}
          >
            All Categories <i class="fas fa-bars"></i>
          </li>
          <li>Clothings</li>
          <li>Electronics</li>
          <li>Fashion</li>
          <li>Home and Kitchen</li>
          <li>Drinks</li>
          <li>Mens</li>
          <li>Women</li>
        </ul>
      </div>
      <>
        <Collapse in={open}>
          <Links to="/">Hello!</Links>
        </Collapse>
      </>
    </>
  );
}

export default HeaderBottom;
