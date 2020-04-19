import React, { Component } from "react";
import "../../App.css";
import MainHeader from "../header/mainHeader";
import SliderCarousel from "../carousel";
import Slider from "react-slick";
import CommodityPrice from "../commodity";
import Converter from "../Converter";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemCarousel from "../Pages/itemCarousel";
import Special from "../special";
import Adscategory from "./AdsItems";
import Adscategory2 from "./AdsItems2";
import Footer from "../footer/footer";
import ItemCards from "../FeaturedCategories";
import Img1 from "../Image/CateItem1.png";
import Img2 from "../Image/CateItem2.png";
import Img3 from "../Image/CateItem3.png";
import Img4 from "../Image/CateItem4.png";
import Img5 from "../Image/CateItem5.png";
import Img6 from "../Image/CateItem6.png";
import TopAds from "../TopPartAds"
import { Link } from "react-router-dom";
function Page() {
  return (
    <>
      <MainHeader />

      <Container fluid>
        <Row>
          <Col xs={3}>
            <TopAds/>
          </Col>
          <Col xs={6}>
            <SliderCarousel />
          </Col>
          <Col xs={3}>
            <CommodityPrice />
          </Col>
        </Row>
      </Container>

      <Container>
        <Special />
        <ItemCarousel Heading="Top Commodity" />
      </Container>

      <Adscategory />

      <Container>
        <Link to="/ProductPage">
          Link
        </Link>
        <ItemCarousel Heading="Deals Of the Day" />
      </Container>
      <Adscategory2 />

      <Container>
        <Converter />
      </Container>
      <div
        style={{
          margin: "20px",
          backgroundColor: "#e0e0e0",
          padding: "15px",
        }}
      >
        <Row>
          <ItemCards title="Farm Produce" img1={Img1} img2={Img2} img3={Img3} />
          <ItemCards title="Accesories" img1={Img4} img2={Img5} img3={Img6} />
          <ItemCards title="mens" img1={Img2} img2={Img5} img3={Img1} />
        </Row>
        <Row>
          <ItemCards title="Livestock" img1={Img4} img2={Img5} img3={Img6} />
          <ItemCards title="Electornics" img1={Img2} img2={Img5} img3={Img1} />
          <ItemCards title="Agriculture" img1={Img1} img2={Img2} img3={Img3} />
        </Row>
        <Row>
          <ItemCards title="Electornics" img1={Img2} img2={Img5} img3={Img1} />
          <ItemCards title="Livestock" img1={Img4} img2={Img5} img3={Img6} />
          <ItemCards title="Agriculture" img1={Img1} img2={Img2} img3={Img3} />
        </Row>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default Page;
