import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";
import HeaderLogo from "../logoComponents/headerLogo";
import Collapse from "react-bootstrap/Collapse";
import { Navbar, Button, FormControl } from "react-bootstrap";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar>
        <Button
          className="MenuBtn"
          onClick={() => setOpen(!open)}
          aria-controls="Menu"
          aria-expanded={open}
        >
          <i class="fas fa-bars"></i>
        </Button>
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
      <div className="Menu">
        <Collapse in={open}>
          <div id="menu">
            <ListGroup>
              <ListGroup.Item className="BlackDropdown mb-2">
                About
              </ListGroup.Item>
              <ListGroup.Item className=" BlackDropdown mb-2">
                Shop
              </ListGroup.Item>
              <ListGroup.Item className=" BlackDropdown mb-2">
                Request Quotation
              </ListGroup.Item>
              <ListGroup.Item className=" BlackDropdown mb-2">
                Services
              </ListGroup.Item>
              <ListGroup.Item className=" BlackDropdown mb-2">
                Help
              </ListGroup.Item>

              <Link to="/Signin">
                <ListGroup.Item>
                  <Button variant="outline-danger" className="mb-2 ">
                    Login
                  </Button>
                </ListGroup.Item>
              </Link>

              <ListGroup
                horizontal
                className="socials"
                style={{ marginTop: "-20px", marginLeft: "-10px" }}
              >
                <ListGroup.Item className="social">
                  <i class="fab fa-facebook-f"></i>
                </ListGroup.Item>
                <ListGroup.Item className="social">
                  <i class="fab fa-twitter"></i>
                </ListGroup.Item>
                <ListGroup.Item className="social">
                  <i class="fab fa-instagram"></i>
                </ListGroup.Item>
                <ListGroup.Item className="social">
                  <i class="fab fa-linkedin-in"></i>
                </ListGroup.Item>
              </ListGroup>

              <ListGroup
                className="faded"
                style={{
                  marginTop: "-20px"
                }}
              >
                <ListGroup.Item className="BlackDropdown">
                  Terms Of Services
                </ListGroup.Item>
                <ListGroup.Item className="BlackDropdown">
                  Privacy Policy
                </ListGroup.Item>
              </ListGroup>
            </ListGroup>
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default Header;
