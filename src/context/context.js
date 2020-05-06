import React, { Component } from "react";
import { storeProducts, detailProduct } from "./Data";
import Row from "react-bootstrap/Row"

const ProductContext = React.createContext();

//PROVIDER

//CONSUMER

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
  };
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    })
    this.setState(() => {
      return {products:tempProducts}
    })
  }
  handleDetail = () => {
    console.log("Hello");
  }; 
  addToCart = () => {
    console.log("Hello Cart");
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
