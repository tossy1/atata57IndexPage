import React from "react";
import Header from "../header/header";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../accounts/account.css";
import Item1 from "../Image/itemImg1.png";
import GrnBtn from '../formComponents/buttonGreen'
import Nav from 'react-bootstrap/Nav'

function PreviewPage() {
  return (
    <div className="display-item">
      <Container>
        <Row>
          <Col xs={6}>
            <div style={{ width: "100%" }}>
              <img src={Item1} />
            </div>
          </Col>
          <Col xs={6}>
            <p className="item-title">Men's Polo T-shirt</p>
            <p className="item-description">
              Factory direct custom men casual plaid 100% cotton shirts
            </p>
                      <p className="item-title">700 - 8,500</p>
            <p>Shipping From: Nigeria</p>
                      <div>
                          <GrnBtn text="Add to Cart"/>
            </div>
          </Col>
        </Row>
          </Container>
          <Container fluid>
              <Row>
              <Col xs={8}>
              <Nav variant="tabs" defaultActiveKey="/home">
                  <Nav.Item>
                      <Nav.Link href="#">Product Details</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="link-1">Company Profile</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="link-2">Transaction</Nav.Link>
                  </Nav.Item>
                  </Nav>
              </Col>
              <Col xs={4}>
                      Hello
              </Col>
              </Row>
          </Container>

      <Header />
    </div>
  );
}

export default PreviewPage;
