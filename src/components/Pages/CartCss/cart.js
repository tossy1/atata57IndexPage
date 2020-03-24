import React from "react";
import "./cart.css";

function Cart() {
  return (
    <div className="cartContainer" id="cartContainer">
      <div className="cart">
        <ul>
          <li className="item">
            <div className="image">
              <img src="/item.jpg" alt="Item" />
            </div>
            <div className="itemDetails" id="itemDetails"></div>
          </li>
        </ul>
      </div>
      <div className="checkOut">
        <h2 id="Header">Summary</h2>
        <ul>
          <li>
            <p className="title">Total Price</p>
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
