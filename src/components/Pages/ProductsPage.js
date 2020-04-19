import React from "react";
import Header from "../header/header";
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
import Rating from "../starRating"
import { Container, Row, Col } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";



function ItemDisplay() {
  const style = {
    marginTop: "9%",
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "#e0e0e0",
          paddingTop: "8%",
        }}
      >
        <div style={{ margin: "auto", width: "80%" }}>
          <img src={AdsImg} style={{ width: "100%" }} />
        </div>
        <Container fluid style={style}>
          <div>
            <Row>
              <Col
                xs={2}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                }}
              >
                Hello!
              </Col>
              <Col xs={10}>
                <div
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                  }}
                >
                  <CardGroup>
                    <Card>
                      <Card.Img variant="top" src={CatImg1} />
                      <Card.Body>
                        <Card.Title>Tomatos</Card.Title>
                        <Card.Text>{/* <Rating /> */}</Card.Text>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={CatImg2} />
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text></Card.Text>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={CatImg3} />
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text></Card.Text>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={CatImg5} />
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text></Card.Text>
                      </Card.Body>
                    </Card>
                  </CardGroup>
                  <CardGroup>
                    <Card>
                      <Card.Img variant="top" src={CatImg1} />
                      <Card.Body>
                        <Card.Title>Tomatos</Card.Title>
                        <Card.Text>{/* <Rating /> */}</Card.Text>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={CatImg2} />
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text></Card.Text>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={CatImg3} />
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text></Card.Text>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={CatImg5} />
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text></Card.Text>
                      </Card.Body>
                    </Card>
                  </CardGroup>
                  <CardGroup>
                    <Card>
                      <Card.Img variant="top" src={CatImg1} />
                      <Card.Body>
                        <Card.Title>Tomatos</Card.Title>
                        <Card.Text>{/* <Rating /> */}</Card.Text>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={CatImg2} />
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text></Card.Text>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={CatImg3} />
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text></Card.Text>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={CatImg5} />
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text></Card.Text>
                      </Card.Body>
                    </Card>
                  </CardGroup>
                  <CardGroup>
                    <Card>
                      <Card.Img variant="top" src={CatImg1} />
                      <Card.Body>
                        <Card.Title>Tomatos</Card.Title>
                        <Card.Text>{/* <Rating /> */}</Card.Text>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={CatImg2} />
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text></Card.Text>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={CatImg3} />
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text></Card.Text>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={CatImg5} />
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text></Card.Text>
                      </Card.Body>
                    </Card>
                  </CardGroup>
                  <CardGroup>
                    <Card>
                      <Card.Img variant="top" src={CatImg1} />
                      <Card.Body>
                        <Card.Title>Tomatos</Card.Title>
                        <Card.Text>{/* <Rating /> */}</Card.Text>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={CatImg2} />
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text></Card.Text>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={CatImg3} />
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text></Card.Text>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={CatImg5} />
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text></Card.Text>
                      </Card.Body>
                    </Card>
                  </CardGroup>
                </div>
                <Pagination>
                  <Pagination.First />
                  <Pagination.Prev />
                  <Pagination.Item>{1}</Pagination.Item>
                  <Pagination.Ellipsis />

                  <Pagination.Item>{10}</Pagination.Item>
                  <Pagination.Item>{11}</Pagination.Item>
                  <Pagination.Item active>{12}</Pagination.Item>
                  <Pagination.Item>{13}</Pagination.Item>
                  <Pagination.Item disabled>{14}</Pagination.Item>

                  <Pagination.Ellipsis />
                  <Pagination.Item>{20}</Pagination.Item>
                  <Pagination.Next />
                  <Pagination.Last />
                </Pagination>
              </Col>
            </Row>
          </div>
        </Container>
        <Container fluid>Hello!</Container>
      </div>

      <Header />
    </>
  );
}
export default ItemDisplay;
