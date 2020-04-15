import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function SmallCard(props) {

  return (
     
    <div className="featuredCat">
      <span className="title">{props.title}</span>
          <Row>
              <Image src={props.img1} />
              <Image src={props.img2} />
              <Image src={props.img3} />
      </Row>
    </div>
  );
}

export default SmallCard;
