import React, { Component } from "react";
import "../accounts/acoounts.css";

function InputPhone(inputPhone) {
    return (
      <div class="formgroup">
        <input type="tel" placeholder={inputPhone.placeholder} />
      </div>
    );
  }

export default InputPhone;
