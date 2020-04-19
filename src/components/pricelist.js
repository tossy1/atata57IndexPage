import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PriceList(props) {
  const style = {
    textAlign: "center",
    padding: "5px",
  };
 

  return (
    <Row style={style}>
      <Col>
        <li>{props.Commodity}</li>
      </Col>
      <Col>
        <li>
          {props.price}
        </li>
      </Col>
    </Row>
  );
}

export default PriceList;
