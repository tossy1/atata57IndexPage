import React, { Component } from "react";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import styled from "styled-components";

export default class UserReg extends Component {
  render() {
    return (
      <>
        <Register>
          <h3>Registration Form</h3>
          <div className="UserProfile">
            <p>User Profile</p>
            <hr />
            <div className="UserForm row">
              <div className="d-flex">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Middle Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="d-flex">
                <input type="email" placeholder="Email" />
                <input type="email" placeholder="Retype-email" />
                <input type="number" placeholder="Phone number" />
              </div>
              <div className="d-flex">
                <select
                  class="selectpicker countrypicker"
                  data-flag="true"
                ></select>
                <input type="text" placeholder="Middle Name" />
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
          </div>
          <div className="Residence"></div>
        </Register>

        {/* <Header />
        <Footer /> */}
      </>
    );
  }
}

const Register = styled.div`
  width: 70%;
  margin: auto;
  h3 {
    color: var(--colorAsh);
    font-size: 30px;
  }
`;
