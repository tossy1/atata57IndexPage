import React, { Component } from "react";
import "../accounts/acoounts.css";

function InputPassword(inputPassword) {
  return (
    <div class="formgroup">
      <input type="password" placeholder={inputPassword.placeholder} />
    </div>
  );
}

export default InputPassword;
