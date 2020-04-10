import React from "react";
import "../../App.css";
import MainHeader from "../header/mainHeader";
import Slider from "../carousel";
import CommodityPrice from "../commodity";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemCarousel from "../Pages/itemCarousel";

function Page() {
  
  return (
    <>
      <MainHeader />
      <Container fluid>
        <Row>
          <Col xs={9}>
            <Slider />
          </Col>
          <Col xs={3}>
            <CommodityPrice />
          </Col>
        </Row>
          <ItemCarousel />
      </Container>
    </>
  );
}

export default Page;
