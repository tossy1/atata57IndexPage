import React from "react";
import Slider from "react-slick";
import "../accounts/account.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Sam1 from "../Image/sample 1.png";
import Sam2 from "../Image/sample 2.png";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        height: "50%",
        marginRight: "-7%",
        marginTop: "-2%",
        width: "10%",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        padding: "9px 0",
        height: "20%",
        width: "30%",
        marginTop: "-5%",
        marginLeft: "-20px",
      }}
      onClick={onClick}
    />
  );
}
function ItemCarousel(props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <Card style={{ margin: "5%", padding: "0 5%" }}>
        <Card.Header className="cardHeader" style={{ textAlign: "center" }}>
          {props.Heading}
        </Card.Header>
        <i className="fas fa-chevron-left arrows arrows-left"></i>
        <i className="fas fa-chevron-right arrows arrows-right"></i>

        <div
          style={{
            height: "10%",
          }}
        >
          <Slider {...settings}>
            <div>
              <Card
                className="card-item"
                style={{
                  width: "100%",
                  margin: "7px",
                  padding: "5%",
                }}
              >
                <Image
                  src={Sam1}
                  style={{
                    width: "90%",
                    height: "12rem",
                    margin: "auto",
                    objectFit: "contain",
                    objectPosition: "center center",
                  }}
                />
                <Card.Body>
                  <Card.Title className="item-title">Coco Yam</Card.Title>
                  <Card.Text>Vendor : @officialAtata</Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div>
              <Card
                className="card-item"
                style={{
                  width: "100%",
                  margin: "7px",
                  padding: "5%",
                }}
              >
                <Image
                  src={Sam2}
                  style={{
                    width: "90%",
                    height: "12rem",
                    margin: "auto",
                    objectFit: "contain",
                    objectPosition: "center center",
                  }}
                />
                <Card.Body>
                  <Card.Title className="item-title">Apple</Card.Title>
                  <Card.Text>Vendor : @officialAtata</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card
                className="card-item"
                style={{
                  width: "100%",
                  margin: "7px",
                  padding: "5%",
                }}
              >
                <Image
                  src={Sam1}
                  style={{
                    width: "90%",
                    height: "12rem",
                    margin: "auto",
                    objectFit: "contain",
                    objectPosition: "center center",
                  }}
                />
                <Card.Body>
                  <Card.Title className="item-title">Coco Yam</Card.Title>
                  <Card.Text>Vendor : @officialAtata</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card
                className="card-item"
                style={{
                  width: "100%",
                  margin: "7px",
                  padding: "5%",
                }}
              >
                <Image
                  src={Sam2}
                  style={{
                    width: "90%",
                    height: "12rem",
                    margin: "auto",
                    objectFit: "contain",
                    objectPosition: "center center",
                  }}
                />
                <Card.Body>
                  <Card.Title className="item-title">Coco Yam</Card.Title>
                  <Card.Text>Vendor : @officialAtata</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card
                className="card-item"
                style={{
                  width: "100%",
                  margin: "7px",
                  padding: "5%",
                }}
              >
                <Image
                  src={Sam1}
                  style={{
                    width: "90%",
                    height: "12rem",
                    margin: "auto",
                    objectFit: "contain",
                    objectPosition: "center center",
                  }}
                />
                <Card.Body>
                  <Card.Title className="item-title">Coco Yam</Card.Title>
                  <Card.Text>Vendor : @officialAtata</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card
                className="card-item"
                style={{
                  width: "100%",
                  margin: "7px",
                  padding: "5%",
                }}
              >
                <Image
                  src={Sam2}
                  style={{
                    width: "90%",
                    height: "12rem",
                    margin: "auto",
                    objectFit: "contain",
                    objectPosition: "center center",
                  }}
                />
                <Card.Body>
                  <Card.Title className="item-title">Coco Yam</Card.Title>
                  <Card.Text>Vendor : @officialAtata</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card
                className="card-item"
                style={{
                  width: "100%",
                  margin: "7px",
                  padding: "5%",
                }}
              >
                <Image
                  src={Sam1}
                  style={{
                    width: "90%",
                    height: "12rem",
                    margin: "auto",
                    objectFit: "contain",
                    objectPosition: "center center",
                  }}
                />
                <Card.Body>
                  <Card.Title className="item-title">Coco Yam</Card.Title>
                  <Card.Text>Vendor : @officialAtata</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Slider>
        </div>
      </Card>
    </div>
  );
}

export default ItemCarousel;
