import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PriceList(props) {
    const style = {
    textAlign : "center",
}
  return (
      <Row style={style}>
      <Col>
        <li>{props.Commodity}</li>
      </Col>
      <Col>
        <li>{props.Price}</li>
      </Col>
    </Row>
  );
}

export default PriceList;
