import React, { Component } from "react";
import "../accounts/acoounts.css";
import { Link } from "react-router-dom";
import Logo2 from "../logoComponents/logo2";
import InputText from "../formComponents/inputText";
import InputSigninPass from "../formComponents/signinPass";
import GreenButton from "../formComponents/buttonGreen";
class Login extends Component {
  render() {
    return (
      <div className="signin overflow" id="signin">
        <Logo2 />
        <p className="signH">Sign in to your account</p>

        <form>
          <InputText id="" placeholder="Email/Username" />
          <InputSigninPass id="" placeholder="Password" />
          <div className="formgroup">
            <button className="signinbtnG">SIGN IN</button>
          </div>
        </form>
        <div className="register">
          <p>
            Don't have an account?{" "}
            
              <Link to="/Register">
                <span>Register</span>
              </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
