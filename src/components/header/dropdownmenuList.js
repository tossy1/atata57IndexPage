import React from "react";


function MenuList(props) {
  return (
    <li>
      {props.name}
      <i className="fas fa-angle-right" />
    </li>
  );
}

export default MenuList;
