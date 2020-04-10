import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Modal from "react-bootstrap/Modal";
import MainScreen from "../accounts/mainScreen";

function RightMenu() {
  const [show, setShow] = useState(false);
  return (
    <>
      <ul class="rightMenu">
        <Link to="/Wishlist" className="LinkStyle">
          <li className="LinkStyle">
            <i class="fa fa-heart"></i>Wishlist
          </li>
        </Link>
        <Link to="/cart" className="LinkStyle">
          <li>
            <i class="fas fa-shopping-cart"></i> Cart
          </li>
        </Link>
        <Link className="LinkStyle" onClick={() => setShow(true)}>
          <li>
            <i className="fas fa-user-circle"></i>Account
          </li>
          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <MainScreen />
          </Modal>
        </Link>
        <Link to="/RFQ" className="LinkStyle">
          <li>
            <i class="fas fa-file-contract"></i> RFQ
          </li>
        </Link>
      </ul>
    </>
  );
}

export default RightMenu;
