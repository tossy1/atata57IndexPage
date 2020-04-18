import React from "react";
import "../accounts/account.css";
import { Link } from "react-router-dom";
import InputText from "../formComponents/inputText";
import InputSigninPass from "../formComponents/signinPass";
import GreenButton from "../formComponents/buttonGreen";
import Container from "react-bootstrap/Container";
import Header from "../header/header";
import Footer from "../footer/footer";
function Login() {
  return (
    <>
      <Container>
        <div className="signin" id="signin">
          <p className="signH">Sign in to your account</p>

          <form>
            <InputText id="" placeholder="Email/Username" />
            <InputSigninPass placeholder="Password" />
            <GreenButton text="Sign In" />
          </form>
          <div className="register">
            <p>
              Don't have an account?
              <Link to="/Register">
                <span>Register</span>
              </Link>
            </p>
          </div>
        </div>
      </Container>
      <Header />
      {/* <Footer /> */}
    </>
  );
}

export default Login;
