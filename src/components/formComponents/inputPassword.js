import React from "react";
import "../accounts/acoounts.css";

function InputPassword(props) {
  
  return (
    <div class="formgroup">
      <input type="password" placeholder={props.placeholder} />
    </div>
  );
}

export default InputPassword;
