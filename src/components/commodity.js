import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import PriceList from "../components/pricelist";

function Commodity() {
  const styles = {
    padding: "5%",
    listStyleType: "none",
    color: "#000",
    backgroundColor: "#f0f0f0",
  };
  return (
    <>
      <div
        style={{
          padding: "5%",
          marginTop: "6%",
          textAlign: "center",
          backgroundColor: "#f0f0f0",
        }}
      >
        Commodity PriceList
      </div>
      <ListGroup style={styles}>
        <PriceList Commodity="Rice" price="15000" />
        <PriceList Commodity="Rubber" price="5000" />
        <PriceList Commodity="Wood" price="2500" />
        <PriceList Commodity="Iron" price="10000" />
        <PriceList Commodity="Steel" price="22000" />
        <PriceList Commodity="Rice" price="15000" />
        <PriceList Commodity="Rubber" price="5000" />
        <PriceList Commodity="Wood" price="2500" />
        <PriceList Commodity="Iron" price="10000" />
        <PriceList Commodity="Steel" price="22000" />
      </ListGroup>
      </>
  );
}

export default Commodity;
