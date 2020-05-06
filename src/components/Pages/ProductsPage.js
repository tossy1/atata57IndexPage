import React, { Component } from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context/context";

export default class ItemDisplay extends Component {
  render() {
    const { id, title, img, price, info, moq, inCart } = this.props.product;

    return (
      <ProductWrapper className="col-9 mx-auto d-flex col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="img-container" onClick={() => console.log("clicked")}>
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />

              {/* ITEMS DETAILS */}

              <div className="card-footer justify-content-between">
                <p className="align-self-center title mb-0">{title}</p>
                <h5 className="price mb-0">
                  <span className="mr-1">$</span>
                  {price}
                  <span className="moq">
                    {"( MOQ"} {moq} {")"}
                  </span>
                </h5>

                <span className="text-align-center info mb-0">{info}</span>
              </div>
              <div className="button">
                <Link to="/Whislist">
                  <button
                    className="whislistBtn p-2 mx-2 mb-2"
                    disabled={inCart ? true : false}
                    onClick={() => console.log("added to the cart")}
                  >
                    {inCart ? (
                      <p className="text-capitalized mb-0" disabled></p>
                    ) : (
                        <span>Add to wishlist</span>
                    )}
                    
                  </button>
                </Link>
                <button
                  className="cart-btn mx-1 p-2"
                  disabled={inCart ? true : false}
                  onClick={() => console.log("added to the cart")}
                >
                  {inCart ? (
                    <p className="text-capitalized mb-0" disabled></p>
                  ) : (
                      <span>Add to Cart</span>
                  )}
                 
                </button>
              </div>
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
    width: 100%;
    background: transparent;
    border-top: transparent;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all 1s linear;
  }

  .title {
    color: var(--colorYellow);
    font-family: "Muli", sans-serif;
    font-size: 20px;
    font-weight: bold;
  }
  .price {
    text-align: center;
    color: #000;
    font-family: "Muli", sans-serif;
    font-weight: 700;
    font-size: 30px;
  }
  .moq {
    font-size: 10px;
  }
  .button {
    margin: auto;
    width: 100%;
  }
  .cart-btn {
    background-color: var(--colorGreen);
    border: none;
    font-size: 14px;
    color: #fff;
    outline: none;
    width: 50%;
  }
  .whislistBtn {
    background-color: var(--colorYellow);
    font-size: 14px;
    border: none;
    padding: 5px;
    outline: none;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
      color: #000;
      text-decoration: none;
    }
  }
  .img-container {
    postiton: relative;
    overflow: hidden;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }
  .card-img-top {
    transition: all 1s linear;
  }
`;
