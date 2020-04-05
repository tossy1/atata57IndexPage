import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image";

function CartItem(props) {
    const style = {
        margin: "10px",
    }
    return(
        <>
  <ListGroup.Item style = {{style}}>
    <Image style={{
        img:"50%",

    }}
        src={props.ImageID} rounded />



    <button style={{
    backgroundColor: "Red", 
    border:"none",
    borderRadius:"100%", 
    padding:"10px", 
    width:"5%",
    position:"absolute",
    marginTop: "-5%",
    marginLeft: "17%",

     }}>X</button>
  </ListGroup.Item>
        </>
    )
    
}

export default CartItem;