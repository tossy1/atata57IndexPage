import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import PriceList from "../components/pricelist";
function Commodity() {
  const styles = {
    width: "100%",
    padding: "5%",
    listStyleType: "none",
    color: "#0e8502",
    backgroundColor: "#000",
  };
  return (
    <Container fluid>
      <div
        style={{
          width: "100%",
          padding: "5%",
          marginTop: "6%",
          textAlign: "center",
          backgroundColor: "#f0f0f0",
        }}
      >
        Commodity Price
      </div>
      <ListGroup style={styles}>
              <PriceList Commodity="Rice" Price="15000" />
              <PriceList Commodity="Rubber" Price="5000" />
              <PriceList Commodity="Wood" Price="2500" />
              <PriceList Commodity="Iron" Price="10000" />
              <PriceList Commodity="Steel" Price="22000" />
              <PriceList Commodity="Rice" Price="15000" />
              <PriceList Commodity="Rubber" Price="5000" />
              <PriceList Commodity="Wood" Price="2500" />
              <PriceList Commodity="Iron" Price="10000" />
              <PriceList Commodity="Steel" Price="22000" />
      </ListGroup>
    </Container>
  );
}

export default Commodity;
