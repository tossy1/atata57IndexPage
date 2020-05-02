import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import PriceList from "../components/pricelist";

function Commodity() {
  
  return (
    <div className='commodity'>
      <div className="header">
        Commodity PriceList
      </div>
      <ListGroup>
        <PriceList Commodity="Rice" country="NGN" price="15000" icon=" fas fa-sort-up" />
        <PriceList Commodity="Rubber" country="GHN" price="5000" icon=" fas fa-sort-down" />
        <PriceList Commodity="Plastics" country="CHN" price="5000" icon=" fas fa-sort-up" />
        <PriceList Commodity="Cloths" country="NGN" price="5000" icon=" fas fa-sort-up" />
        <PriceList Commodity="Rubber" country="NGN" price="5000" icon=" fas fa-sort-down" />
        <PriceList Commodity="Rice" country="NGN" price="15000" icon=" fas fa-sort-up" />
        <PriceList Commodity="Rubber" country="GHN" price="5000" icon=" fas fa-sort-down" />
        <PriceList Commodity="Plastics" country="CHN" price="5000" icon=" fas fa-sort-up" />
        <PriceList Commodity="Cloths" country="NGN" price="5000" icon=" fas fa-sort-up" />
        <PriceList Commodity="Rubber" country="NGN" price="5000" icon=" fas fa-sort-down" />
        <PriceList Commodity="Rice" country="NGN" price="15000" icon=" fas fa-sort-up" />
        <PriceList Commodity="Rubber" country="GHN" price="5000" icon=" fas fa-sort-down" />
        <PriceList Commodity="Plastics" country="CHN" price="5000" icon=" fas fa-sort-up" />
      </ListGroup>
    </div>
  );
}

export default Commodity;
