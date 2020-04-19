import React, { useState, Component } from "react";

import Slider from "react-slick";

import CarouselImg from "../../src/components/Image/Mohsen Fatemian on Behance.png";
import CarouselImg2 from "../../src/components/Image/Prefeitura de Criciúma - REFIS 2014.png";
import CarouselImg3 from "../../src/components/Image/13288.jpg";
import CarouselImg4 from "../../src/components/Image/slidr.jpg";
import CarouselImg5 from "../../src/components/Image/1916.jpg";
import CarouselImg6 from "../../src/components/Image/2655633.jpg";
import CarouselImg7 from "../../src/components/Image/3331683.jpg";
import CarouselImg8 from "../../src/components/Image/3508428.jpg";
import CarouselImg9 from "../../src/components/Image/957.jpg";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplayspeed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div style={{ marginTop: "20px" }}>
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
            <img src={CarouselImg4} />
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

// function Slider() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//  return (
//     <Carousel className="mt-3" activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <img className="d-block w-100"
//           src={CarouselIMg} alt="First slide"/>

//       </Carousel.Item>
//       <Carousel.Item>
//         <img className="d-block w-100" src={CarouselIMg2} alt="Second slide" />

//       </Carousel.Item>
//       <Carousel.Item>
//         <img className="d-block w-100" src={CarouselIMg3} alt="Third slide" />

//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Slider;
