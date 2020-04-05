import React from "react";
import Header from "../../header/header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Img1 from "./1.png";
import Img2 from "./2.png";
import Img3 from "./4.png";
import GreenButton from "../../formComponents/buttonGreen";
import Button from "react-bootstrap/Button";
import PriceProps from "../../formComponents/priceProps";
import CartItem from '../../formComponents/cartItem';

import "./cart.css";
function Cart() {
  return (
    <>
      <Container fluid>
        <Container className="mt-5 contain">
          <Row>
            <Col xs={12} md={8}>
              <ListGroup>
               <CartItem ImageID={Img1}/>
               <CartItem ImageID={Img2}/>
               
              </ListGroup>
            </Col>
            <Col xs={6} md={4}>
              <PriceProps label="Total Price" amount="6000" currency="NGN"/>
              <PriceProps label="Shipping fee" amount="500" currency="NGN"/>
              <PriceProps label="Total Amount" amount="6500" currency="NGN"/>
              <GreenButton text="Proceed To Payment" />
            </Col>
          </Row>
        </Container>
      </Container>

      <Header />
    </>
  );
}

export default Cart;
