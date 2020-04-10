import React, { Component } from "react";
import "../acoounts.css";
import InputText from "../../formComponents/inputText";
import InputEmail from "../../formComponents/InputEmail";
import InputPhone from "../../formComponents/InputPhone";
import InputPassword from "../../formComponents/inputPassword";
import GreenButton from "../../formComponents/buttonGreen";
import SelectCountry from "../../formComponents/selectCountry";
import Header from "../../header/header";

class RegisterUser extends Component {
  render() {
    return (
      <>
        <div class="userReg">
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
            <div class="register" style={{ margin: "5% auto", padding: "2%" }}>
              <p>
                By Sign Up, you agree to our <span>Terms and conditions</span>
              </p>
            </div>
          </form>
        </div>
        <Header />
      </>
    );
  }
}

export default RegisterUser;
