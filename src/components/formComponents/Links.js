import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ListGroupItem } from "react-bootstrap";

function Links(props) {
  return (
    <Link to={props.to}>
      <ListGroupItem>{props.value}</ListGroupItem>
    </Link>
  );
}

export default Links;
