import React, { Component } from "react";
import "../acoounts.css";
import Logo2 from "../../logoComponents/logo2";
import SelectCountry from "../../formComponents/selectCountry";

class RegisterUser extends Component {
  render() {
    return (
      <div class="userReg">
        <Logo2 />
        <p class="regH">Buyer Account Registration</p>

        <form>
          <div class="formgroup">
            <input type="text" placeholder="First Name" />
          </div>
          <div class="formgroup">
            <input type="text" placeholder="Last Name" />
          </div>

          <SelectCountry />
          <div class="formgroup">
            <input type="email" placeholder="Example@email.com" />
          </div>
          <div class="formgroup">
            <input type="tel" placeholder="XXX-XXXX-XXXX" />
          </div>
          <div class="formgroup">
            <input type="password" placeholder="Enter Preffered Password" />
          </div>
          <div class="formgroup">
            <input type="password" placeholder="Retype Preffered Password" />
          </div>
          <div className="formgroup">
            <button className="signinbtnG">Register</button>
          </div>
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
