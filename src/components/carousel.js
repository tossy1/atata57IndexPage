import React, { useState, Component } from "react";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import "../components/accounts/account.css";
import CarouselImg from "../../src/components/Image/Mohsen Fatemian on Behance.png";
import CarouselImg2 from "../../src/components/Image/Prefeitura de Criciúma - REFIS 2014.png";
import CarouselImg3 from "../../src/components/Image/13288.jpg";
import CarouselImg5 from "../../src/components/Image/1916.jpg";
import CarouselImg6 from "../../src/components/Image/2655633.jpg";
import CarouselImg7 from "../../src/components/Image/3331683.jpg";
import CarouselImg8 from "../../src/components/Image/3508428.jpg";
import CarouselImg9 from "../../src/components/Image/957.jpg";

export default class SimpleSlider extends Component {
  
  render() {
    const settings = {
      infinite: true,
      autoplay: true,
      autoplayspeed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div>
            <img src={CarouselImg} />
          </div>
          <div>
            <img src={CarouselImg2} />
          </div>
          <div>
            <img src={CarouselImg3} />
          </div>
          <div>
            <img src={CarouselImg5} />
          </div>
          <div>
            <img src={CarouselImg6} />
          </div>
          <div>
            <img src={CarouselImg7} />
          </div>
          <div>
            <img src={CarouselImg8} />
          </div>
          <div>
            <img src={CarouselImg9} />
          </div>
        </Slider>
        </div>
    );
  }
}
