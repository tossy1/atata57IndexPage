import React from "react";
import Header from "../header/header";
import "../accounts/account.css";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import AdsImg from "../Image/adImage.jpg";
import ItemCards from "../FeaturedCategories";
import CatImg1 from "../Image/CateItem1.png";
import CatImg2 from "../Image/CateItem2.png";
import CatImg3 from "../Image/CateItem3.png";
import CatImg4 from "../Image/CateItem4.png";
import CatImg5 from "../Image/CateItem5.png";
import CatImg6 from "../Image/CateItem6.png";
import AdsCard from "../Pages/adcard";
import Adscategory from "./AdsItems";
import Rating from "../starRating";
import { Container, Row, Col } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import FixedSocialLinks from "../Pages/fixedSocialLinks";
import MenuList from "../header/dropdownmenuList";
import Image from "react-bootstrap/Image";
import Display1 from "../Image/display.png";
import Display2 from "../Image/display2.png";
import Display3 from "../Image/display3.png";
import Display4 from "../Image/display4.png";
import PriceFilter from "../pricefilter";

function ItemDisplay() {
  const style = {
    marginTop: "9%",
  };
  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "#e0e0e0",
          paddingTop: "14%",
        }}
      >
        <div className="links">
          <li>Home/</li>
          <li>ProductPage</li>          
      </div>
        <Row style={{ margin: "auto" }}>
          <Col
            xs={2}
            style={{
              width: "100%",
              backgroundColor: "#fff",
            }}
          >
            <div
              style={{
                margin: "10px",
                marginBottom: "30px",
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              <p>Categories</p>
            </div>

            <div
              style={{
                color: "#797878",
                fontSize: "17px",
              }}
            >
              <MenuList name="Placeholder" />
              <MenuList name="Placeholder" />
              <MenuList name="Placeholder" />
              <MenuList name="Placeholder" />
              <MenuList name="Placeholder" />
              <MenuList name="Placeholder" />
              <MenuList name="Placeholder" />
              <MenuList name="Placeholder" />
              <MenuList name="Placeholder" />
              <MenuList name="Placeholder" />
              <MenuList name="Placeholder" />
              <MenuList name="Placeholder" />
            </div>
            <div className>
              <div
                style={{
                  margin: "10px",
                  marginBottom: "30px",
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                <p>Price Range</p>
              </div>
              <PriceFilter />
            </div>
          </Col>
          <Col xs={10}>
            <div
              style={{
                margin: "auto",
                width: "100%",
                backgroundColor: "#fff",
                padding: "10px",
              }}
            >
              <img src={AdsImg} style={{ width: "100%" }} />
            </div>
            <div className="CardAds">
              <CardGroup>
                <Card>
                  <Image src={Display1} rounded />
                  <p>Most Viewed</p>
                </Card>
                <Card>
                  <Image src={Display2} rounded />
                  <p>Top Rated</p>
                </Card>
                <Card>
                  <Image src={Display3} rounded />
                  <p>Best Manufacturer</p>
                </Card>
                <Card>
                  <Image src={Display4} rounded />
                  <p>Used Goods</p>
                </Card>
              </CardGroup>
            </div>

            <div className="products">
              <Col>
                <CardGroup>
                  <Card>
                    <Image src={Display4} />
                    <div>
                      <p className="description">Deep Freezer</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <Image src={Display2} />
                    <div>
                      <p className="description">Iphone 11</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <Image src={Display4} />
                    <div>
                      <p className="description">Iphone 11</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <Image src={Display4} />
                    <div>
                      <p className="description">Iphone 11</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                </CardGroup>
                <CardGroup>
                  <Card>
                    <Image src={Display4} />
                    <div>
                      <p className="description">Deep Freezer</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <Image src={Display2} />
                    <div>
                      <p className="description">Iphone 11</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <Image src={Display4} />
                    <div>
                      <p className="description">Iphone 11</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <Image src={Display4} />
                    <div>
                      <p className="description">Iphone 11</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                </CardGroup>
                <CardGroup>
                  <Card>
                    <Image src={Display4} />
                    <div>
                      <p className="description">Deep Freezer</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <Image src={Display2} />
                    <div>
                      <p className="description">Iphone 11</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <Image src={Display4} />
                    <div>
                      <p className="description">Iphone 11</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <Image src={Display4} />
                    <div>
                      <p className="description">Iphone 11</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                </CardGroup>
                <CardGroup>
                  <Card>
                    <Image src={Display4} />
                    <div>
                      <p className="description">Deep Freezer</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <Image src={Display2} />
                    <div>
                      <p className="description">Iphone 11</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <Image src={Display4} />
                    <div>
                      <p className="description">Iphone 11</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <Image src={Display4} />
                    <div>
                      <p className="description">Iphone 11</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                </CardGroup>
                <CardGroup>
                  <Card>
                    <Image src={Display4} />
                    <div>
                      <p className="description">Deep Freezer</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <Image src={Display2} />
                    <div>
                      <p className="description">Iphone 11</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <Image src={Display4} />
                    <div>
                      <p className="description">Iphone 11</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <Image src={Display4} />
                    <div>
                      <p className="description">Iphone 11</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                </CardGroup>
                <CardGroup>
                  <Card>
                    <Image src={Display4} />
                    <div>
                      <p className="description">Deep Freezer</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <Image src={Display2} />
                    <div>
                      <p className="description">Iphone 11</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <Image src={Display4} />
                    <div>
                      <p className="description">Iphone 11</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <Image src={Display4} />
                    <div>
                      <p className="description">Iphone 11</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                </CardGroup>
                <CardGroup>
                  <Card>
                    <Image src={Display4} />
                    <div>
                      <p className="description">Deep Freezer</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <Image src={Display2} />
                    <div>
                      <p className="description">Iphone 11</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <Image src={Display4} />
                    <div>
                      <p className="description">Iphone 11</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <Image src={Display4} />
                    <div>
                      <p className="description">Iphone 11</p>
                      <p className="amount">50,000 - 150,000</p>
                      <div className="DiscountAndMoq">
                        <li className="discount">Iphone 11</li>
                        <li className="MOQ"> 11 pieces (MOQ)</li>
                      </div>
                    </div>
                  </Card>
                </CardGroup>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
      <FixedSocialLinks />
      <Header />
    </>
  );
}
export default ItemDisplay;
