import React from "react";
import Logo3 from "../logoComponents/logo3";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormGroup } from "react-bootstrap";

function footerTop() {
  const style = {
    width: "100%",
    backgroundColor: "#000",
    color: "#fff",
  };
  return (
    <div style={style}>
      <Row>
        <Col xs={3}>
          <Logo3 />
        </Col>
        <Col xs={6}>
          <h4>New To Atata57.com</h4>
          <p>
            Subscribe to our newsletter to get updates on our latest offers!
          </p>
          <FormGroup as={Row} style={{ margin: " 5px auto" }}>
            <Form.Control
              type="email"
              placeholder="Enter email"
              style={{ width: "50%", border: "none" }}
            />
            <Button variant="primary" type="submit" style={{ border: "none" }}>
              Submit
            </Button>
          </FormGroup>
        </Col>
        <Col xs={3}>Hello@Hello.com</Col>
      </Row>
    </div>
  );
}

export default footerTop;
