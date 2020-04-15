import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FooterBottom() {
  const style = {
    margin: "auto",
    color: "#fff",
  };
  return (
    <div
      style={{
        backgroundColor: "#1d1d1d",
      }}
    >
      <Row style={style}>
        <Col xs={3}>LET US HELP YOU</Col>
        <Col xs={3}>ABOUT Atata57</Col>
        <Col xs={3}>MAKE MONEY WITH JUMIA</Col>
        <Col xs={3}>JUMIA INTERNATIONAL</Col>
      </Row>
    </div>
  );
}

export default FooterBottom;
