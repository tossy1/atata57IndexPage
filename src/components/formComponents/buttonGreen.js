import React from "react";
import "../accounts/acoounts.css";

function GreenButton(props){
     return (
      <div className="formgroup">
        <button className="signinbtnG">{props.text}</button>
      </div>
    );
  }
export default GreenButton;
