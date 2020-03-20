import React, { Component } from "react";
import "../accounts/acoounts.css";
import Modal from "../formComponents/modal";
import Logo2 from "../logoComponents/logo2";
class Register extends Component {
  render() {
    return (
      <Modal>
        <div className="signin hidden overflow" id="signin">
          <Logo2 />
          <p class="regH">Choose an Account Type</p>

          <div class="accountType">
            <div class="accountcolumn">
              <div class="accountCard user">
                <i class="fas fa-user"></i>
                <p>Individual</p>
              </div>
              <div class="accountCard company">
                <i class="fas fa-building"></i>
                <p>Company</p>
              </div>
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
      </Modal>
    );
  }
}

export default Register;
