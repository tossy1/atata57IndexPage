import React from "react";
import MainHeader from "../header/mainHeader";
import Simpleslider from "../carousel/carousel";
import CommodityPrice from "../commodity";
import Nav from "react-bootstrap/Nav";
import Converter from "../Converter";
import Container from "react-bootstrap/Container";
import FixedSocialLinks from "../Pages/fixedSocialLinks";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Adscategory from "./AdsItems";
import FeaturedLinks from "../Pages/featuredLinks"
import Footer from "../footer/footer";
import RFQ from "../rfq";
import ItemCategory from "../Pages/ItemCategories";
import AdvertBanner from "../AdvertBanner";

function Page() {
  return (
    <>
      <MainHeader />
      <div className="col-12 my-3 index-viewed">
        <Row>
          <div className="col-xs-3 col-lg-3 col-md-0 col-sm-0 Price">
            <CommodityPrice />
          </div>
          <div className="col-xs-9 col-lg-9 col-md-12 col-sm-12 slider">
            <Simpleslider />
          </div>
        </Row>
      </div>
      <div className="col-11 mx-auto my-4">
        <FeaturedLinks />
      </div>
      <div className="col-12 my-5">
        <div className="col-10 mx-auto my-5">
          <ItemCategory />
        </div>
      </div>

      <AdvertBanner />

      <div className=" index-slider">
        <Adscategory />
      </div>

      <AdvertBanner />
      
      <div className="col-12 my-5">
        <div className="col-10 mx-auto my-5">
          <ItemCategory />
        </div>
      </div>
      <FixedSocialLinks />
    </>
  );
}



export default Page;
