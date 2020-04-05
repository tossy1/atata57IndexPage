import React, { Component } from "react";
import "../accounts/acoounts.css";

function InputPhone(props) {
    return (
      <div class="formgroup">
        <input type="tel" placeholder={props.placeholder} />
      </div>
    );
  }

export default InputPhone;
