import React, { Component } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styled from "styled-components";
import ItemCards from "../card/card";
import ItemCardsSm from "../card/smallCard";
import NumberFormat from "react-number-format";
import Img1 from "../Pages/categoryImages/clothes.png";
import Img2 from "../Pages/categoryImages/Computer.png";
import Img3 from "../Pages/categoryImages/Furniture.png";
import Img4 from "../Pages/categoryImages/gadgets.png";
import Img5 from "../Pages/categoryImages/machine.png";
import Img6 from "../Pages/categoryImages/phones.png";
import Img7 from "../Pages/categoryImages/shoes.png";
import Img8 from "../Pages/categoryImages/appliance.png";
import Img9 from "../Pages/categoryImages/accessories.png";
import Img10 from "../Pages/categoryImages/Computer.png";

class TopSelling extends Component {
  render() {
    return (
      <>
        <div className="row">
          <ItemCards
            img={Img1}
            title="Red Sweater from Congo"
            amount1="2000"
            amount2="20000"
          />
          <ItemCards
            img={Img2}
            title="Red Sweater from Congo"
            amount1="2000"
            amount2="20000"
          />
        </div>
        <ItemCardsSm img={Img3} moq=" 10 pieces" title="Naija made Furniture" amount1="2000" amount2="20000" />
      </>
    );
  }
}

export default TopSelling;
