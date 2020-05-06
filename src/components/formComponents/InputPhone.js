import React, {useState} from "react"
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
function InputPhone(props) {
  const [value, setValue] = useState();
  return (
    <div class="formgroup">
      <PhoneInput
        placeholder={props.placeholder}
         value={value}
        onChange={setValue}
      />
    </div>
  );
}

export default InputPhone;
