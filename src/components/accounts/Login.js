import React, { Component } from "react";
import "../accounts/acoounts.css";
import Modal from "../formComponents/modal";
import Logo2 from "../logoComponents/logo2";
import InputText from "../formComponents/inputText";
import InputSigninPass from "../formComponents/signinPass";
import GreenButton from "../formComponents/buttonGreen";
class Login extends Component {
  render() {
    return (
      <Modal>
        <div className="signin hidden overflow" id="signin">
          <Logo2 />
          <p className="signH">Sign in to your account</p>

          <form>
            <InputText id="" placeholder="Email/Username" />
            <InputSigninPass id="" placeholder="Password" />
            <GreenButton id=""> SIGN IN</GreenButton>
          </form>
          <div className="register">
            <p>
              Don't have an account? <span>Register</span>
            </p>
          </div>
        </div>
      </Modal>
    );
  }
}

export default Login;
