import React from "react";
import "../accounts/acoounts.css";

function GreenButton(greenButton){
     return (
      <div className="formgroup">
        <button className="signinbtnG">{greenButton.text}</button>
      </div>
    );
  }
export default GreenButton;
