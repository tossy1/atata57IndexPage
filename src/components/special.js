import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
function SpecialItem(props) {
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
      <div className="specialicon">
        <i className={props.icon}></i>
      </div>
      <div className="title">
        <p>{props.text}</p>
      </div>
    </div>
  );
}
function special() {
  const style = {
    backgroundColor: "#edebeb",
    margin: "30px auto",
    width: "100%",
    padding: "20px",
    borderRadius: "15px",
  };
  return (
    <div style={style}>
      <Row>
        {/* <Link to="/"> */}
          <SpecialItem icon="fas fa-money-bill-wave" text="Atata Pay" />
        {/* </Link> */}
        {/* <Link to="/"> */}
          <SpecialItem icon="fas fa-house-damage" text="Atata Insurance" />
        {/* </Link> */}
        {/* <Link to="/"> */}
          <SpecialItem icon="fas fa-wallet" text="Atata Wallet" />
        {/* </Link> */}
      </Row>
      <Row>
        {/* <Link to="/"> */}
          <SpecialItem icon="fas fa-warehouse" text="Warehouse" />
        {/* </Link> */}
        {/* <Link to="/"> */}
          <SpecialItem icon="fas fa-shipping-fast" text="Logistics" />
        {/* </Link> */}
        {/* <Link to="/"> */}
          <SpecialItem icon="fas fa-briefcase" text="Career" />
         {/* </Link> */}
      </Row>
    </div>
  );
}

export default special;
