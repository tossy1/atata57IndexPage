import React, { Component } from "react";
import "../accounts/acoounts.css";

function InputEmail(props){
    return (
      <div class="formgroup">
        <input type="email" placeholder={props.placeholder} />
      </div>
    );
  }
export default InputEmail;
