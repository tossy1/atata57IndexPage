import React, { useState, Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
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
    
    return (
      <div className="slider">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarouselImg}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarouselImg2}
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarouselImg3}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarouselImg5}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarouselImg6}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarouselImg7}
            />
          </Carousel.Item>
        </Carousel>
        </div>
    );
  }
}
