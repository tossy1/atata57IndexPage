import React from "react";
import MainHeader from "../header/mainHeader";
import Simpleslider from "../carousel/carousel";

import CommodityPrice from "../commodity";
import Converter from "../Converter";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemCarousel from "../Pages/itemCarousel";
import AtataServices from "../atata-Services";
import Adscategory from "./AdsItems";
import Adscategory2 from "./AdsItems2";
import Footer from "../footer/footer";
import ItemCards from "../FeaturedCategories";
import TopAds from "../TopPartAds";
import { Link } from "react-router-dom";
import FourAds from "../Pages/fourAds";
import RFQ from "../rfq";
import FixedSocialLinks from "../../components/Pages/fixedSocialLinks";

function Page() {
  return (
    <>
      <MainHeader />
      <div className="index-viewed">
        <Row>
          <div className="col-xs-3 col-lg-3 col-md-0 col-sm-0 Price">
            <CommodityPrice />
          </div>
          <div className="col-xs-9 col-lg-9 col-md-12 col-sm-12 slider">
            <Simpleslider />
          </div>
        </Row>
      </div>
      <div className="index-slider">
        <span> Hello! </span>
        <Adscategory />
      </div>
      
      
      
        
    </>
  );
}

export default Page;
