import React, { Component } from "react";
import "../accounts/acoounts.css";

class Modal extends Component {
  render() {
    return (
      <div className="modal hidden" id="modal">
        <div className="closebtn">
          <button className="close" id="close">
            X
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
