import React from "react";

function PriceProps(props) {
  const thisStyle = {
    width: "90%",
    margin: "9% 0",
    textAlign: "center",
    display: "inline-flex",
    listStyleType: "none",
    color: "#2b2b2b"
  };
  return (
    <div>
      <ul style={thisStyle}>
        <li
          style={{
            padding: "15px",
            fontSize: "17px",
            textAlign: "center"
          }}
        >
          {props.label} :
        </li>
        <li
          style={{
            margin: "auto",
            fontSize: "17px",
            marginRight: "70px",
            textAlign: "right"
          }}
        >
          {props.amount}
        </li>
        <p
          style={{
            fontSize: "10px",
            margin: "auto 0",
            marginLeft: "-65px"
          }}
        >
          {props.currency}
        </p>
      </ul>
    </div>
  );
}
export default PriceProps;
