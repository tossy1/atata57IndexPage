import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PriceList from "./pricelist";
function Commodity() {
  return (
    <Container className="converter">
      <p>Currency Converter</p>
      <Row>
        <li>Amount</li>
        <li>From</li>
        <li>To</li>
      </Row>
      <Row>
        <input type="text" />
        <select>
          <option>NGN</option>
          <option>USD</option>
          <option>ERP</option>
        </select>
        <select>
          <option>USD</option>
          <option>NGN</option>
          <option>ERP</option>
        </select>
      </Row>
      <p className="Amount" id="convertedAmount">387 USD</p>
    </Container>
  );
}

export default Commodity;
