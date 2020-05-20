import React, { Component } from "react";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

import Header from "../../header/header";
import Footer from "../../footer/footer";
import styled from "styled-components";

export default class UserReg extends Component {
  constructor(props) {
    super(props);
    this.state = { country: '', region: '' };
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }
  render() {
    const { country, region } = this.state;
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
                <CountryDropdown
                  value={country}
                  onChange={(val) => this.selectCountry(val)} />
                <RegionDropdown
                  country={country}
                  value={region}
                  onChange={(val) => this.selectRegion(val)} />
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
