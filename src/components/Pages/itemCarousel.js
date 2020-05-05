import React from "react";
import Slider from "react-slick";
import "../accounts/account.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

function ItemCarousel(props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <div className="ItemCarousel">
      <Slider {...settings}>
        
         
      </Slider>
      <div className="arrows">
        <i class="far fa-caret-square-left"></i>
        <i class="far fa-caret-square-right"></i>
      </div>
    </div>
  );
}

export default ItemCarousel;
