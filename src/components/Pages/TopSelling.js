import React, { Component } from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import styled from "styled-components";




class TopSelling extends Component {
  render() {
    return (
      <TopSellingContainer>
        <div className="banner">

        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-3">Hello</div>
            <div className="col-9">Hello</div>
          </div>
        </div>
        <Header />
        <Footer />
      </TopSellingContainer>
    );
  }
}

const TopSellingContainer = styled.div`
margin-top: 100px;
.banner{
  background-color: var(--colorAsh);
  width: 90%;
  margin: auto;
  height: 100px;
}
`

export default TopSelling;
