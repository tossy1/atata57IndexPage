import React, { Component } from "react";
import "../acoounts.css";
import Logo2 from "../../logoComponents/logo2";
import { Link } from "react-router-dom";
class Register extends Component {
  render() {
    return (
      <div className="signin overflow" id="signin">
        <Logo2 />
        <p class="regH">Choose an Account Type</p>

        <div class="accountType">
          <div class="accountcolumn">
            <Link to="/RegisterUser">
              <div class="accountCard user">
                <i class="fas fa-user"></i>
                <p>Individual</p>
              </div>
            </Link>
            <Link to="/CompanyReg">
              <div class="accountCard company">
                <i class="fas fa-building"></i>
                <p>Company</p>
              </div>
            </Link>
          </div>
          <div class="accountcolumn">
            <div class="accountCard seller">
              <i class="fas fa-briefcase"></i>
              <p>Seller</p>
            </div>
            <div class="accountCard warehouse">
              <i class="fas fa-warehouse"></i>
              <p>Warehouse</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
