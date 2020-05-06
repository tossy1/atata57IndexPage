import React, { Component } from "react";

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

export default Modal;
