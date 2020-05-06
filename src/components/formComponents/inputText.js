import React, { Component } from "react";

function InputText(props) {
  return (
    <div class="formgroup">
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
}

export default InputText;
