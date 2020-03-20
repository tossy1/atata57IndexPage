import React, { Component } from "react";
import "../accounts/acoounts.css";

class InputSigninPass extends Component {
  render() {
    return (
      <div class="formgroup password">
        <input type="password" name="signinEmail" />
        <div class="forgotPass">forgot?</div>
      </div>
    );
  }
}

export default InputSigninPass;
