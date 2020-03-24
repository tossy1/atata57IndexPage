import React from "react";
import "./cart.css";

function Cart() {
  return (
    <div class="container" id="container">
      <div class="cart">
        <ul>
          <li class="item">
            <div class="image">
              <img src="/item.jpg" alt="Item" />
            </div>
            <div class="itemDetails" id="itemDetails"></div>
          </li>
        </ul>
      </div>
      <div class="checkOut">
        <h2 id="header">Summary</h2>
        <ul>
          <li>
            <p class="title">Total Price</p>
            <p class="amount">
              $<span id="totalAmount">40000</span>
            </p>
          </li>
          <li>
            <p class="title">Promo Code</p>
            <input type="text" placeholder="SALES 21" />
          </li>
          <li>
            <p class="title">Includes VAT</p>
            <p class="amount">
              <span id="VAT">20</span>%
            </p>
          </li>
          <li>
            <p class="title">Shipping Fee</p>
            <p class="amount">
              $<span id="shippingFee">10000</span>
            </p>
          </li>
          <li class="dotted">
            <p class="totalLabel">Total Amount</p>
            <p class="totalAmount">
              $<span id="GeneralAmount"></span>
            </p>
          </li>
        </ul>
        <button id="checkoutBtn">Checkout</button>
      </div>
    </div>
  );
}
export default Cart;
