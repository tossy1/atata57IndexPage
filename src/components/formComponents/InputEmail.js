import React, { Component } from "react";
import "../accounts/acoounts.css";

function InputEmail(props){
    return (
      <div class="formgroup">
        <input type="email" placeholder={props.placeholder} name={props.email} />
      </div>
    );
  }
export default InputEmail;
