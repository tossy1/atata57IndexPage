import React from "react";
import Card from "react-bootstrap/Card";
import Ad1 from "../components/Image/6f03fa4696eeaabcbc5107353705a625.jpg";
import Ad2 from "../components/Image/e10c1360d1cbebeee4df9da84c89733f.jpg";

function TopAds() {
 
  const styles = {
    margin: "1px",
  };
  return (
    <div className="cardGroup">
      <Card>
        <Card.Img style={styles} src={Ad2} alt="Card image" />
      </Card>
      <Card>
        <Card.Img style={styles} src={Ad1} alt="Card image" />
      </Card>
      <Card>
        <Card.Img style={styles} src={Ad2} alt="Card image" />
      </Card>
    </div>
  );
}

export default TopAds;
