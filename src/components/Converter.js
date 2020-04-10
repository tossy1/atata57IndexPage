import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import PriceList from "./pricelist";
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
        Currency Converter
      </div>
      <ListGroup style={styles}>USD NGN</ListGroup>
    </Container>
  );
}

export default Commodity;
