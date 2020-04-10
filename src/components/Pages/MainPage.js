import React from "react";
import "../../App.css";
import MainHeader from "../header/mainHeader";
import Slider from "../carousel";
import CommodityPrice from "../commodity";
import Converter from "../Converter";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemCarousel from "../Pages/itemCarousel";
import Footer from "../footer/footer";

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
        <ItemCarousel Heading="Top Selling" />
        <ItemCarousel Heading="Deals Of the Day" />
        <Row>
          <Col xs={3}>
            <Converter />
          </Col>
          <Col xs={9}>HELLO!</Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Page;
