import React from "react";
import Card from "react-bootstrap/Card";
import './accounts/account.css';
import Ad1 from "../components/Image/6f03fa4696eeaabcbc5107353705a625.jpg";

function TopAds() {
 
  return (
    <div className="topAds">
      <Card>
        <Card.Img src={Ad1} alt="Card image" />       
      </Card>
    </div>
  );
}

export default TopAds;
