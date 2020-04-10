import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import CarouselIMg from "../../src/components/Image/Mohsen Fatemian on Behance.png";
import CarouselIMg2 from "../../src/components/Image/Art & Motion _ Artists Juco Advertising.png";
import CarouselIMg3 from "../../src/components/Image/Prefeitura de Criciúma - REFIS 2014.png";
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

 return (
    <Carousel className="mt-3" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100"
          src={CarouselIMg} alt="First slide"/>
       
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={CarouselIMg2} alt="Second slide" />

        
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={CarouselIMg3} alt="Third slide" />

        
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
