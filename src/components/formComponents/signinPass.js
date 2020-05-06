import React, { Component } from "react";

function InputSigninPass(props) {
  return (
    <div class="formgroup password">
      <input type="password" placeholder={props.placeholder} />
      <div class="forgotPass">forgot?</div>
    </div>
  );
}

export default InputSigninPass;
