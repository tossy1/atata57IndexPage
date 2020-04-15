import React from "react";
import CatImg1 from "../Image/CateItem1.png";
import CatImg2 from "../Image/CateItem2.png";
import CatImg3 from "../Image/CateItem3.png";
import CatImg4 from "../Image/CateItem4.png";
import CatImg5 from "../Image/CateItem5.png";
import CatImg6 from "../Image/CateItem6.png";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

function AdsCard(props) {
  return (
    <div className="AdsStyle">
      <Image src={props.src} rounded />
      <p id="price">{props.price} NGN</p>
      <p id="discount">{props.discount} off</p>
    </div>
  );
}
function AdsCategory2() {
  const style = {
    margin: "20px 0px",
  };
  return (
    <div className="Adscategory2" style={style}>
      <p> Category</p>
      <hr />
      <div className="adsLink">
        <Link to="/">View All</Link>
      </div>
      <Row>
        <AdsCard src={CatImg1} price="500" discount="-25%" />
        <AdsCard src={CatImg3} price="200" discount="-25%" />
        <AdsCard src={CatImg2} price="5000" discount="-25%" />
        <AdsCard src={CatImg4} price="500" discount="-25%" />
        <AdsCard src={CatImg5} price="5000" discount="-25%" />
        <AdsCard src={CatImg6} price="2500" discount="-25%" />
      </Row>
      <Row>
        <AdsCard src={CatImg5} price="5000" discount="-25%" />
        <AdsCard src={CatImg4} price="50000" discount="-25%" />
        <AdsCard src={CatImg2} price="500" discount="-25%" />
        <AdsCard src={CatImg1} price="500" discount="-25%" />
        <AdsCard src={CatImg4} price="500" discount="-25%" />
        <AdsCard src={CatImg5} price="5000" discount="-25%" />
      </Row>
    </div>
  );
}
export default AdsCategory2;
