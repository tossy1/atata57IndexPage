import React, { Component } from "react";
import "../accounts/acoounts.css";

function InputEmail(inputEmail){
    return (
      <div class="formgroup">
        <input type="email" placeholder={inputEmail.placeholder} />
      </div>
    );
  }
export default InputEmail;
