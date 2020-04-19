import React from "react"
import Image from "react-bootstrap/Image"



function AdsCard(props) {
  return (
    <div className="AdsStyle">
      <Image src={props.src} rounded />
      <p id="price">{props.price} NGN</p>
      <p id="discount">{props.discount} off</p>
    </div>
  );
}


export default AdsCard;
