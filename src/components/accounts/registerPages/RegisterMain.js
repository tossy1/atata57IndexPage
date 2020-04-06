import React, { Component } from "react";
import "../acoounts.css";
import Container from "react-bootstrap/Container";
import Logo2 from "../../logoComponents/logo2";
import { Link } from "react-router-dom";
class Register extends Component {
  render() {
    return (
      <Container className="registerMain">
        <Logo2 />
          
        <p class="regH">Choose an Account Type</p>
          <div class="accountcolumn">
            <Link to="/IndividualRegistration" className="accountCard user">
              <i class="fas fa-user"></i>
              <p>Buyer</p>
            </Link>
            <Link to="/CompanyReg" class="accountCard company">
              <i class="fas fa-building"></i>
              <p>Service Provider</p>
            </Link>
          </div>
          <div class="accountcolumn">
            <Link to="/ProductSellerRegistration" class="accountCard seller">
              <i class="fas fa-briefcase"></i>
              <p>Products Suppliers</p>
            </Link>
            <Link to="/WarehouseRegistration" class="accountCard warehouse">
              <i class="fas fa-warehouse"></i>
              <p>Warehouse</p>
            </Link>
          </div>
        <div className="register">
          <p>
            Already have an account?
            <Link to="/Signin">
              <span>Signin</span>
            </Link>
          </p>
        </div> 
      </Container>
    );
  }
}

export default Register;
