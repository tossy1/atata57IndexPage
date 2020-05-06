import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context/context";

export default class ItemDisplay extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;

    return (
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg3 my-3">
          <div className="card">
            <div
              className="img-container p-5"
              onClick={() => console.log("clicked")}
            >
              <Link to="/details">
                <img src={img} alt="product" className="class-img-top" />
                
                
                {/* ITEMS DETAILS */}

                <div className="card-footer d-flex justify-content-between">
                  <p className="align-self-center mb-0">{title}</p>
                  <h5 className="text-blue font-italic mb-0">
                    <span className="mr-1">$</span>
                    {price}
                  </h5>
              </div>
              <button
                className="cart-btn whislistBtn"
                disabled={inCart ? true : false}
                onClick={() => console.log("added to the cart")}
              >
                {inCart ? (
                  <p className="text-capitalized mb-0" disabled></p>
                ) : (
                    <i className="fas fa-plus" />
                  )}
                  Add to wishlist
                </button>
              <button
                className="cart-btn cartBtn"
                disabled={inCart ? true : false}
                onClick={() => console.log("added to the cart")}
              >
                {inCart ? (
                  <p className="text-capitalized mb-0" disabled></p>
                ) : (
                    <i className="fas fa-plus" />
                  )}
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    postiton: relative;
    overflow: hidden;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
`;
