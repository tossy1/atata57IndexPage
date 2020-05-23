import React from "react";
import "../../../App.css";
import "./cart.css";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <section className="shoping-cart spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="shoping__cart__table">
              <Table>
                <thead>
                  <tr>
                    <th className="shoping__product">Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="shoping__cart__item">
                      <img src="img/cart/cart-1.jpg" alt="" />
                      <h5>Vegetable’s Package</h5>
                    </td>
                    <td className="shoping__cart__price">$55.00</td>
                    <td className="shoping__cart__quantity">
                      <div className="quantity">
                        <div className="pro-qty">
                          <input type="text" value="1" />
                        </div>
                      </div>
                    </td>
                    <td className="shoping__cart__total">$110.00</td>
                    <td className="shoping__cart__item__close">
                      <span className="icon_close"></span>
                    </td>
                  </tr>
                  <tr>
                    <td className="shoping__cart__item">
                      <img src="img/cart/cart-2.jpg" alt="" />
                      <h5>Fresh Garden Vegetable</h5>
                    </td>
                    <td className="shoping__cart__price">$39.00</td>
                    <td className="shoping__cart__quantity">
                      <div className="quantity">
                        <div className="pro-qty">
                          <input type="text" value="1" />
                        </div>
                      </div>
                    </td>
                    <td className="shoping__cart__total">$39.99</td>
                    <td className="shoping__cart__item__close">
                      <span className="icon_close"></span>
                    </td>
                  </tr>
                  <tr>
                    <td className="shoping__cart__item">
                      <img src="img/cart/cart-3.jpg" alt="" />
                      <h5>Organic Bananas</h5>
                    </td>
                    <td className="shoping__cart__price">$69.00</td>
                    <td className="shoping__cart__quantity">
                      <div className="quantity">
                        <div className="pro-qty">
                          <input type="text" value="1" />
                        </div>
                      </div>
                    </td>
                    <td className="shoping__cart__total">$69.99</td>
                    <td className="shoping__cart__item__close">
                      <span className="icon_close"></span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="shoping__cart__btns">
              <Link to="/">
                <button className="primary-btn cart-btn">
                  CONTINUE SHOPPING
                </button>
              </Link>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="shoping__continue">
              <div class="shoping__discount">
                <h5>Discount Codes</h5>
                <form action="#" className="d-flex">
                  <input type="text" placeholder="Enter your coupon code" />
                    <button type="submit" class="site-btn">APPLY COUPON</button>
                            </form>
                        </div>
              </div>
            </div>
          <div class="col-lg-6">
            <div class="shoping__checkout">
              <h5>Cart Total</h5>
              <ul>
                <li>Subtotal <span>$454.98</span></li>
                <li>Total <span>$454.98</span></li>
              </ul>
              <button class="proceed-btn">PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
