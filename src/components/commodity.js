import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import PriceList from "../components/pricelist";

function Commodity() {
  const styles = {
    padding: "5%",
    listStyleType: "none",
    textAlign: "center",
    color: "#000",
    backgroundColor: "#ffffff",
    marginBottom: "5%",
  };
  return (
    <>
      <div
        style={{
          padding: "3%",
          marginTop: "3%",
          marginBottom: "3%",
          textAlign: "center",
          backgroundColor: "#ffffff",
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
        <PriceList Commodity="Rice" price="15000" />
        <PriceList Commodity="Rubber" price="5000" />
        <PriceList Commodity="Wood" price="2500" />
        <PriceList Commodity="Rice" price="15000" />
               <p>More...</p>
      </ListGroup>
    </>
  );
}

export default Commodity;
