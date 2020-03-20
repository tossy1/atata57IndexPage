import React, { Component } from "react";
import "../accounts/acoounts.css";

class InputPassword extends Component {
  render() {
    return (
      <div class="formgroup">
        <input type="password" name="password" />
      </div>
    );
  }
}

export default InputPassword;
