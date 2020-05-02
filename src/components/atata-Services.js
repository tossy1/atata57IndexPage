import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
function Services(props) {
  const SpecialItemStyle = {
    width: "30%",
    padding: "20px",
    margin: "15px auto",
    backgroundColor: "#fff",
    display: "flex",
    borderRadius: "15px",
  };
  return (
    <div style={SpecialItemStyle} className="special">
      <Link to={props.Link}>
      <div className="specialicon">
        <i className={props.icon}></i>
      </div>
      <div className="title">
        <p>{props.text}</p>
        </div>
      </Link>
    </div>
  );
}
function AtataServices() {
 
  return (
    <div className="atata-services">
     <Services text="Hello" Link="/"/>
    </div>
  );
}

export default AtataServices;
