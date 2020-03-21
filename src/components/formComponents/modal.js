import React, { Component } from "react";
import "../accounts/acoounts.css";

class Modal extends Component {
  render() {
    return (
      <div className="container-fluid">
          <button className="close" id="close">
            <i className = "fa fa-back">back</i>
          </button>
      </div>
    );
  }
}

// var CloseModal = document.getElementById("modal");
// var CloseBtn = document.getElementById("close");

// CloseBtn.addEventListener('click', closeB);

// function closeB() {
//   CloseModal.style.ClassList.add("hidden");
// }

export default Modal;
