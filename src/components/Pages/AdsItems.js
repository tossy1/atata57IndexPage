import React from "react";
import Product from "../Pages/ProductsPage";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { ProductConsumer } from "../../context/context";

function AdsCategory() {
  const style = {
    margin: "20px 0px",
  };
  return (
    <div className="Adscategory" style={style}>
      <p> Top Selection</p>
      <hr />
      <Row>
        <ProductConsumer>
          {(product) => {
            return product.products.map((product) => {
              return <Product key={product.id} product={product} />;
            });
          }}
        </ProductConsumer>
      </Row>
    </div>
  );
}
export default AdsCategory;
