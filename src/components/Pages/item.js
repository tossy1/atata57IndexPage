import React from "react";
import Card from "react-bootstrap/Card";
import Sam1 from "../Image/sample 1.png";

function item(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>Card title that wraps to a new line</Card.Title>
        <Card.Text>
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default item;
