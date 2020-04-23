import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import HeaderBottom from "../header/headerBottom";
import HeaderLogo from "../logoComponents/headerLogo";
import { Navbar, FormControl } from "react-bootstrap";
function Header() {
  return (
    <div className="MainHeader">
      <Navbar>
        <Navbar.Brand>
          <Link to="/">
            <HeaderLogo
              width="30"
              height="30"
              className="d-inline-block align-top "
              alt="Atata logo"
            />
          </Link>
        </Navbar.Brand>
        <InputGroup className="mb-3 sts">
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append className="btn-header">
            <Button id="SearchBtn">
              <i class="fas fa-search"></i>
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Navbar>

      <HeaderBottom />
    </div>
  );
}

export default Header;
