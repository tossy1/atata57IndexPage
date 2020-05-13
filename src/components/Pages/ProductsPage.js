import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context/context";
import NumberFormat from "react-number-format";
export default class ItemDisplay extends Component {
  render() {
    const {
      id,
      title,
      img,
      price,
      price2,
      info,
      review,
      orders,
      moq,
      inCart,
    } = this.props.product;

    return (
      <ProductWrapper className="col-9 mx-auto d-flex col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>

                <div className="card-footer justify-content-between">
                  <Link to="/details">
                    <p
                      className="align-self-center text-align-center title mb-0"
                      onClick={() => {
                        value.addToCart(id);
                      }}
                    >
                      {title}
                    </p>
                  </Link>
                  <h5 className="price mb-1">
                    <NumberFormat
                      className={"px-3"}
                      value={price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />

                    -

                    <NumberFormat
                      className={"px-3"}
                      value={price2}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                  </h5>

                  <span className="details mt-2 mb-2">{info}</span>
                  <div className="m-2 d-flex">
                    <span className="info text-align-center moq">
                      {"( MOQ"} {moq} {")"}
                    </span>
                    <span className="text-align-center info ">
                      {orders} orders
                    </span>
                  </div>
                  <div className="button">
                    <Link to="/Whislist">
                      <button
                        className="whislistBtn p-2 mx-2 mb-2"
                        disabled={inCart ? true : false}
                      >
                        {inCart ? (
                          <p className="text-capitalized mb-0" disabled></p>
                        ) : (
                          <span>Add to wishlist</span>
                        )}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </ProductConsumer>
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
  .text-align-center {
    text-align: center;
  }
  .details {
    font-size: 14px;
  }
  .title {
    color: var(--colorYellow);
    font-family: "Muli", sans-serif;
    font-size: 20px;
    font-weight: bold;
  }
  .info {
    color: var(--colorGreen);
    font-size: 11px;
    width: 90%;
    margin: auto;
    padding: 10px;
    text-align: center;
  }
  .price {
    text-align: center;
    color: #000;
    font-family: "Muli", sans-serif;
    font-weight: 700;
    font-size: 20px;
  }
  .moq {
    font-size: 11px;
    text-align: center;
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
    width: 90%;
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
