import React, { Component } from "react";
import "../accounts/acoounts.css";

function InputSigninPass(inputSigninPass) {
  return (
    <div class="formgroup password">
      <input type="password" placeholder={inputSigninPass.placeholder} />
      <div class="forgotPass">forgot?</div>
    </div>
  );
}

export default InputSigninPass;
