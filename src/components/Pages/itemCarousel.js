import React from "react";
import Slider from "react-slick";
import "../accounts/account.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Sam1 from "../Image/sample 1.png";
import Sam2 from "../Image/sample 2.png";

function ItemCarousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <Card style={{ margin: "3% auto" }}>
      <Card.Header
        style={{
          border: "0px",
          fontSize: "30px",
          color: "#fff",
          backgroundColor: "#008600",
        }}
      >
        Top Selling Items
      </Card.Header>

      <div
        style={{
          height: "10%",
          backgroundColor: "#008600",
        }}
      >
        <Slider {...settings}>
          <div>
            <Card
              style={{
                width: "100%",
              }}
            >
              <Image
                src={Sam1}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
              />
              <Card.Body>
                <Card.Title>Coco Yam</Card.Title>
                <Card.Text>Vendor : @officialAtata</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div>
            <Card
              style={{
                width: "100%",
              }}
            >
              <Image
                src={Sam2}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
              />
              <Card.Body>
                <Card.Title>Coco Yam</Card.Title>
                <Card.Text>Vendor : @officialAtata</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card
              style={{
                width: "100%",
              }}
            >
              <Image
                src={Sam1}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
              />
              <Card.Body>
                <Card.Title>Coco Yam</Card.Title>
                <Card.Text>Vendor : @officialAtata</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card
              style={{
                width: "100%",
              }}
            >
              <Image
                src={Sam2}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
              />
              <Card.Body>
                <Card.Title>Coco Yam</Card.Title>
                <Card.Text>Vendor : @officialAtata</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card
              style={{
                width: "100%",
              }}
            >
              <Image
                src={Sam1}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
              />
              <Card.Body>
                <Card.Title>Coco Yam</Card.Title>
                <Card.Text>Vendor : @officialAtata</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card
              style={{
                width: "100%",
              }}
            >
              <Image
                src={Sam2}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
              />
              <Card.Body>
                <Card.Title>Coco Yam</Card.Title>
                <Card.Text>Vendor : @officialAtata</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card
              style={{
                width: "100%",
              }}
            >
              <Image
                src={Sam1}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
              />
              <Card.Body>
                <Card.Title>Coco Yam</Card.Title>
                <Card.Text>Vendor : @officialAtata</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Slider>
      </div>
    </Card>
  );
}

export default ItemCarousel;
