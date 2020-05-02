import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import IMG from "../Image/5e9c92e70b0ac.png";
import IMG2 from "../Image/5e9c93e7d377c.png";
import IMG3 from "../Image/rrrrr.png";
import "../../components/accounts/account.css";
function FourAds() {
  const style = {
    fontSize: "17px",
    fontWeight: "Bold",
  }
  return (
    <CardGroup className="FourcardGroup">
      <Card className="Bg-Card">
        <Card.ImgOverlay>
          <Card.Text style={style}>Recommendation</Card.Text>
        </Card.ImgOverlay>
        <button type="submit">Click to go</button>
      </Card>
      <Card>
        <Card.Img src={IMG} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Text style={style}>Appliances</Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Card>
        <Card.Img src={IMG2} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Text style={style}>Life and properties</Card.Text>
        </Card.ImgOverlay>
      </Card>

      <Card>
        <Card.Img src={IMG3} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Text style={style}>Farm Products</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </CardGroup>
  );
}

export default FourAds;
