import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import "./cart.css";
import Img1 from "./1.png";
import Img2 from "./2.png";
import Img3 from "./4.png";
import ListGroupItem from "react-bootstrap/ListGroupItem";

function Cart() {
  return (
    <Container fluid>
      <Container>
        <Row>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col xs={2} md={2}>
                  <Image src={Img1} thumbnail />
                </Col>
                <Col xs={4} md={4}>
                  <div className="itemDetails">
                    <p id="ItemName">Casual Shoe</p>
                    <p id="ItemDescription">
                      This shoe is made and made and made from China imported
                      from spain
                    </p>
                  </div>
                </Col>
                <Col xs={2} md={2}>
                  <Form.Control as="select" custom>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
                </Col>
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
            <ListGroup.Item>
              <Row>
                <Col xs={2} md={2}>
                  <Image src={Img2} thumbnail />
                </Col>
                <Col xs={4} md={4}>
                  <div className="itemDetails">
                    <p id="ItemName">Men's Casual Shoe</p>
                    <p id="ItemDescription">
                      This shoe is made and made and made from China imported
                      from spain
                    </p>
                  </div>
                </Col>
                <Col xs={2} md={2}>
                  <Form.Control as="select" custom>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
                </Col>
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
            <ListGroup.Item>
              <Row>
                <Col xs={2} md={2}>
                  <Image src={Img3} thumbnail />
                </Col>
                <Col xs={4} md={4}>
                  <div className="itemDetails">
                    <p id="ItemName">Casual Shoe</p>
                    <p id="ItemDescription">
                      This shoe is made and made and made from China imported
                      from spain
                    </p>
                  </div>
                </Col>
                <Col xs={2} md={2}>
                  <Form.Control as="select" custom>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
                </Col>
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
        </Row>
      </Container>
      <Row>
        <Col xs={6} md={6} className="bottom mt-5 bg-light">
          <InputGroup className="discount mt-5 mb-5">
            <Form.Control
              placeholder="Promo Code"
              aria-label="Promo Code"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="danger">Promo Code</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col xs={6} md={6} className="bottom mt-5 bg-light">
          <InputGroup className="PriceSum mt-5 mb-5">
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
                  <Button variant="danger" className=" mt-3 mb-2">Proceed To Checkout</Button>
                </Col>
              </Row>
            </Col>
          </InputGroup>
         
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
