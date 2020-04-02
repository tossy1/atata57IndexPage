import React, { Component } from "react";
import "../accounts/acoounts.css";

function InputText(inputText) {
  return (
    <div class="formgroup">
      <input type="text" placeholder={inputText.placeholder} />
    </div>
  );
}

export default InputText;
