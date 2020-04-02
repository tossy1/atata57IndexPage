import React from "react";
import Header from "../../header/header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Img1 from "./1.png";
import Img2 from "./2.png";
import Img3 from "./4.png";
import GreenButton from "../../formComponents/buttonGreen";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Form from "react-bootstrap/form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

import "./cart.css";
function Cart() {
  return (
    <>
      <Container fluid>
        <Container className="mt-5 contain">
          <Row>
            <Col xs={12} md={8}>
              <ListGroup>
                <ListGroup.Item className="mb-3">
                  <Row>
                    <Col xs={2} md={2}>
                      <Image src={Img1} thumbnail />
                    </Col>
                    <Col xs={4} md={4}>
                      <div className="itemDetails">
                        <p id="ItemName">Casual Shoe</p>
                        <p id="ItemDescription">
                          This shoe is made and made and made from China
                          imported from spain
                        </p>
                      </div>
                    </Col>
                    <Col xs={2} md={2}></Col>
                    <Col xs={2} md={2}>
                      <p className="price">2200</p>
                    </Col>
                    <Col xs={2} md={2}>
                      <>
                        <Button variant="danger">X</Button>
                      </>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item className="mb-3">
                  <Row>
                    <Col xs={2} md={2}>
                      <Image src={Img2} thumbnail />
                    </Col>
                    <Col xs={4} md={4}>
                      <div className="itemDetails">
                        <p id="ItemName">Casual Shoe</p>
                        <p id="ItemDescription">
                          This shoe is made and made and made from China
                          imported from spain
                        </p>
                      </div>
                    </Col>
                    <Col xs={2} md={2}></Col>
                    <Col xs={2} md={2}>
                      <p className="price">2200</p>
                    </Col>
                    <Col xs={2} md={2}>
                      <>
                        <Button variant="danger">X</Button>
                      </>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item className="mb-3">
                  <Row>
                    <Col xs={2} md={2}>
                      <Image src={Img3} thumbnail />
                    </Col>
                    <Col xs={4} md={4}>
                      <div className="itemDetails">
                        <p id="ItemName">Casual Shoe</p>
                        <p id="ItemDescription">
                          This shoe is made and made and made from China
                          imported from spain
                        </p>
                      </div>
                    </Col>
                    <Col xs={2} md={2}></Col>
                    <Col xs={2} md={2}>
                      <p className="price">2200</p>
                    </Col>
                    <Col xs={2} md={2}>
                      <>
                        <Button variant="danger">X</Button>
                      </>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xs={6} md={4}>
              <InputGroup className="PriceSum mr-5 ml-5 mt-5 mb-5">
                <Col xs={12} md={12}>
                  <Row>
                    <Col xs={6} md={6}>
                      <li>Total price :</li>
                    </Col>
                    <Col xs={6} md={6}>
                      <li>6000</li>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={6}>
                      <li>Shipping Fee :</li>
                    </Col>
                    <Col xs={6} md={6}>
                      <li>3000</li>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={6}>
                      <li>Total Amount :</li>
                    </Col>

                    <Col xs={6} md={6}>
                      <li className="Tamount">9000</li>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={12}>
                      <GreenButton text="Proceed to payment" />
                    </Col>
                  </Row>
                </Col>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </Container>

      <Header />
    </>
  );
}

export default Cart;
