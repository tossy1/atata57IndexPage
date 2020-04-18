import React, { Component } from "react";
import "../account.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Header from "../../header/header";
import Footer from "../../footer/footer"
import Row from "react-bootstrap/Row";

class Register extends Component {
  render() {
    return (
      <>
        <div className="registerMain">
          <p class="regH">Choose an Account Type</p>
          <Container>
            <Row>
              <Link to="/IndividualRegistration" className="accountCard user">
                <i class="fas fa-user"></i>
                <p>Buyer</p>
              </Link>
              <Link to="/CompanyReg" class="accountCard company">
                <i class="fas fa-building"></i>
                <p>Service Provider</p>
              </Link>
            </Row>
            <Row>
              <Link to="/ProductSellerRegistration" class="accountCard seller">
                <i class="fas fa-briefcase"></i>
                <p>Products Suppliers</p>
              </Link>
              <Link to="/WarehouseRegistration" class="accountCard warehouse">
                <i class="fas fa-warehouse"></i>
                <p>Warehouse</p>
              </Link>
            </Row>
         
          </Container>
          <div
            className="register"
            style={{ margin: "5% auto", padding: "2%" }}
          >
            <p>
              Already have an account?
              <Link to="/Signin">
                <span>Signin</span>
              </Link>
            </p>
          </div>
        </div>
        <Header />
        {/* <Footer /> */}
      </>
    );
  }
}

export default Register;
