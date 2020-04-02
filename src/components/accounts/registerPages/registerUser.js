import React, { Component } from "react";
import "../acoounts.css";
import Logo2 from "../../logoComponents/logo2";
import InputText from "../../formComponents/inputText";
import InputEmail from "../../formComponents/InputEmail";
import InputPhone from "../../formComponents/InputPhone";
import InputPassword from "../../formComponents/inputPassword";
import GreenButton from "../../formComponents/buttonGreen";
import SelectCountry from "../../formComponents/selectCountry";

class RegisterUser extends Component {
  render() {
    return (
      <div class="userReg">
        <Logo2 />
        <p class="regH">Buyer Account Registration</p>

        <form>
          <InputText placeholder="First Name" />
          <InputText placeholder="Last Name" />
          <SelectCountry />
          <InputEmail placeholder="Example@example.com" />
          <InputPhone placeholder="XXX-XXXX-XXXX" />
          <InputPassword placeholder="Enter Preffered password" />

          <InputPassword placeholder="Retype password" />
          <GreenButton text="Register" />
          <div class="register">
            <p>
              By Sign Up, you agree to our <span>Terms and conditions</span>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterUser;
