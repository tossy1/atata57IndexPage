import React from "react";
import { ProductConsumer } from "../../context/context";
import { Link } from "react-router-dom";
import styled from "styled-components";

class PreviewPage extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            seller,
            img,
            img1,
            img2,
            img3,
            info,
            price,
            price2,
            title,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container mt-2 py-5">
              {/* Product info */}
              <div className="row">
                <div className="col-10 col-md-6">
                  <CartImage>
                    <div className="top-section">
                      <img src={img} id="imageContainer" alt="product" />
                    </div>
                    <div className="nav">
                      <img src={img} alt="product" />
                      <img src={img1} alt="product" />
                      <img src={img2} alt="product" />
                      <img src={img3} alt="product" />
                    </div>
                  </CartImage>
                </div>
                {/* Product Text */}

                <div className="col-10 mx-auto col-md-6 my-3">
                  <ProductText>
                    <h1 className="item-title">{title}</h1>
                    <h4 className="text-title muted-text text-uppercase text-mutted mt-3 mb-2">
                      Sold by : <span className="text-uppercase">{seller}</span>
                    </h4>
                    <h4 className="price mt-4 mb-3" id="price">
                      <strong>
                        <span>$</span>
                        {price} - <span>$</span>
                        {price2}
                      </strong>
                    </h4>

                    <div className=" PriceCategory d-flex">
                      <div className="col">
                        <span className="inPieces">2-19</span>
                        <p className="inPiecesPrice">
                          500
                          <span className="small">/pieces</span>
                        </p>
                      </div>
                      <div className="col">
                        <span className="inPieces">20-99</span>
                        <p className="inPiecesPrice">
                          400
                          <span className="small">/pieces</span>
                        </p>
                      </div>
                      <div className="col">
                        <span className="inPieces">100-299</span>
                        <p className="inPiecesPrice">
                          300
                          <span className="small">/pieces</span>
                        </p>
                      </div>
                      <div className="col">
                        <span className="inPieces">>=300</span>
                        <p className="inPiecesPrice">
                          100
                          <span className="small">/pieces</span>
                        </p>
                      </div>
                    </div>

                    <p className=" font-weight-bold mt-3 mb-0">
                      Shpping from: Nigeria
                    </p>
                    <p className=" font-weight-bold mt-3 mb-3">
                      Available Logistics:
                      <span className="btn px-3"> FedEx</span>{" "}
                      <span className="btn px-3"> DHL</span>{" "}
                      <span className="btn px-3"> GIG</span>
                    </p>

                    {/* <p className=" font-weight-bold mt-3 mb-0">
                      About the product:
                    </p>
                    <p className=" text-muted lead">{info}</p>
                    */}
                    <div>
                      <ButtonContainer>
                        <Link to="/whislist">
                          <button className="whislistBtn mx-2">
                            Add to whislist
                          </button>
                        </Link>
                        <Link to="/cart">
                          <button
                            className="cart-btn mx-2"
                            disabled={inCart ? true : false}
                            onClick={() => {
                              value.addToCart(id);
                            }}
                          >
                            {" "}
                            {inCart ? "inCart" : "Add to Cart"}
                          </button>
                        </Link>
                      </ButtonContainer>
                    </div>
                  </ProductText>
                </div>
              </div>

              {/* Item Descriptions */}

              <div className="container mt-2 py-5">
                <p className="title">Descriptions</p>
                <span>{info}</span>
                <p className="title">Reviews</p>
                
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
const ProductText = styled.div`
  .price {
    font-family: "Muli", sans-serif;
    font-size: 30px;
  }
  .PriceCategory {
    border-top: 0.5px solid var(--colorAsh);
    border-bottom: 0.5px solid var(--colorAsh);
    padding: 10px 0;
    text-align: center;
  }
  .btn {
    border-radius: 50px;
    border: 1px solid transparent;
    padding: 7px;
    &:hover {
      border-color: var(--colorYellow);
      color: var(--colorYellow);
      transition: 0.3s;
    }
  }
  .item-title {
    font-family: "Muli", sans-serif;
    font-weight: bold;
    font-size: 20px;
  }
  .muted-text {
    color: var(--colorAsh);
    font-size: 16px;
  }
  .inPiecesPrice {
    font-size: 20px;
    font-weight: bold;
  }
`;
const ButtonContainer = styled.div`
  display: flex;

  .cart-btn {
    background-color: var(--colorGreen);
    border: none;
    font-size: 14px;
    color: #fff;
    outline: none;
    padding: 15px;
    width: 90%;
  }
  .whislistBtn {
    background-color: var(--colorYellow);
    font-size: 14px;
    border: none;
    padding: 15px;
    width: 90%;
    outline: none;
  }
`;
const CartImage = styled.div`
  width: 360px;
  position: absolute;
  object-fit: contain;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);

  .top-section {
    height: 250px;
    overflow: hidden;
    position: relative;
  }
  #imageContainer {
    width: 360px;
    margin: auto;
    height: 240px;
  }
  .nav {
    text-align: center;
    width: 94%;
    margin: auto;
  }
  .nav img {
    width: 80px;
    height: 50px;
    border: 1px solid var(--colorLight);
    margin: 8px 2px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      border: 1px solid var(--colorAsh);
    }
  }
`;
export default PreviewPage;
