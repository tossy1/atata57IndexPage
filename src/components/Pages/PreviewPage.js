import React from "react";
import { ProductConsumer } from "../../context/context";
import { Link } from "react-router-dom";
import styled from "styled-components";

function PreviewPage() {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          id,
          seller,
          img,
          info,
          price,
          title,
          inCart,
        } = value.detailProduct;
        return (
          <div className="container py-5">
            {/* title */}
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted my-5">
                <h1>{title}</h1>
              </div>
            </div>
            {/* end title */}
            {/* Product info */}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                <img src={img} className="img-fluid" alt="product" />
              </div>
              {/* Product Text */}
              <div className="col-10 mx-auto col-md-6 my-3"></div>
              <h1> model : {title}</h1>
              <h4 className="text-title text-uppercase text-mutted mt-3 mb-2">
                Selling by : <span className="text-uppercase">{seller}</span>
              </h4>
              <h4 className="text-blue">
                <strong>
                  price : <span>$</span>
                  {price}
                </strong>
              </h4>
              <p className=" font-weight-bold mt-3 mb-0">About the product:</p>
              <p className=" text-muted lead">{info}</p>
              <div>
                <Link to="/whislist">
                  <button>Add to whislist</button>
                </Link>
                <Link to="/cart">
                  <button>Add to Cart</button>
                </Link>
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}


const ButtonContainer = styled.div`




`
export default PreviewPage;
