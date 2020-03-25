import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/form";
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup';
import "./cart.css";
import Img1 from "./1.png";
import Img2 from "./2.png";
import Img3 from "./4.png";

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
        <Col xs={12} md={6} className="bg-light">
          <div className="discount">
            <InputGroup className="mb-3">
              <Form.Control placeholder="Discount" aria-label="Discount" aria-describedby="basic-addon2" />
              <InputGroup.Append>
                <Button variant="danger">button</Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </Col>
        <Col xs={12} md={6}>
          lgdghdlgdlfghlghdlg
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
