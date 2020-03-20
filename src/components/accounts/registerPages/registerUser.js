import React, { Component } from "react";
import "../accounts/acoounts.css";
import Modal from "../formComponents/modal";
import Logo2 from "../logoComponents/logo2";
import SelectCountry from "../../formComponents/selectCountry";
import InputText from "../../formComponents/inputText";
import InputEmail from "../../formComponents/InputEmail";
import InputPhone from "../../formComponents/InputPhone";
import InputPassword from "../../formComponents/inputPassword";
import GreenButton from "../../formComponents/buttonGreen";
class Register extends Component {
  render() {
    return (
      <Modal>
        <div class="userReg">
          <Logo2 />
          <p class="regH">Individual Account Registration</p>

          <form>
            <InputText id="" placeholder="FirstName" />
            <InputText id="" placeholder="LastName" />

            <SelectCountry />
            <InputEmail id="" placeholder="" />
            <InputPhone id="" placeholder="XXX-XXXX-XXXX" />
            <InputPassword id="" placeholder="Enter Preffered Passowrd" />
            <InputPassword id="" placeholder="Retype Password" />
            <GreenButton>Register</GreenButton>
            <div class="register">
              <p>
                By Sign Up, you agree to our <span>Terms and conditions</span>
              </p>
            </div>
          </form>
        </div>
      </Modal>
    );
  }
}

export default Register;
