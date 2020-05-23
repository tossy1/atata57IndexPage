import React, { Component } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styled from "styled-components";
import NumberFormat from "react-number-format";
import Img1 from "../Pages/categoryImages/clothes.png";
import Img2 from "../Pages/categoryImages/Computer.png";
import Img3 from "../Pages/categoryImages/Furniture.png";
import Img4 from "../Pages/categoryImages/gadgets.png";
import Img5 from "../Pages/categoryImages/machine.png";
import Img6 from "../Pages/categoryImages/phones.png";
import Img7 from "../Pages/categoryImages/shoes.png";
import Img8 from "../Pages/categoryImages/appliance.png";
import Img9 from "../Pages/categoryImages/accessories.png";
import Img10 from "../Pages/categoryImages/Computer.png";

class TopSelling extends Component {
  render() {
    return (
      <TopSellingContainer>
        <div className="banner"></div>
        <div className="col-12 my-5">
          <div className="row">
            <div className="col-3">
              <div className="sidebar">
                <div className="sidebar__item">
                  <h4>Categories</h4>
                  <ul>
                    <li>placeholder</li>
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                  </ul>
                </div>
              </div>
              <div class="sidebar__item">
                <h4>Price</h4>
                <div class="price-range-wrap">
                  <div
                    class="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                    data-min="10"
                    data-max="540"
                  >
                    <div class="ui-slider-range ui-corner-all ui-widget-header"></div>
                    <span
                      tabindex="0"
                      class="ui-slider-handle ui-corner-all ui-state-default"
                    ></span>
                    <span
                      tabindex="0"
                      class="ui-slider-handle ui-corner-all ui-state-default"
                    ></span>
                  </div>
                </div>
              </div>

              <div class="sidebar__item sidebar__item__color--option">
                <h4>Colors</h4>
                <div class="sidebar__item__color sidebar__item__color--white">
                  <label for="white">
                    White
                    <input type="radio" id="white" />
                  </label>
                </div>
                <div class="sidebar__item__color sidebar__item__color--gray">
                  <label for="gray">
                    Gray
                    <input type="radio" id="gray" />
                  </label>
                </div>
                <div class="sidebar__item__color sidebar__item__color--red">
                  <label for="red">
                    Red
                    <input type="radio" id="red" />
                  </label>
                </div>
                <div class="sidebar__item__color sidebar__item__color--black">
                  <label for="black">
                    Black
                    <input type="radio" id="black" />
                  </label>
                </div>
                <div class="sidebar__item__color sidebar__item__color--blue">
                  <label for="blue">
                    Blue
                    <input type="radio" id="blue" />
                  </label>
                </div>
                <div class="sidebar__item__color sidebar__item__color--green">
                  <label for="green">
                    Green
                    <input type="radio" id="green" />
                  </label>
                </div>
              </div>
              <div class="sidebar__item">
                <h4>Popular Size</h4>
                <div class="sidebar__item__size">
                  <label for="large">
                    Large
                    <input type="radio" id="large" />
                  </label>
                </div>
                <div class="sidebar__item__size">
                  <label for="medium">
                    Medium
                    <input type="radio" id="medium" />
                  </label>
                </div>
                <div class="sidebar__item__size">
                  <label for="small">
                    Small
                    <input type="radio" id="small" />
                  </label>
                </div>
                <div class="sidebar__item__size">
                  <label for="tiny">
                    Tiny
                    <input type="radio" id="tiny" />
                  </label>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="d-flex">
                <div className="card">
                  <div className="imageContainer">
                    <img src={Img1} alt="image" />
                  </div>
                  <div className="Amount">
                    <NumberFormat
                      className={"pr-2 priceStyle"}
                      value={200}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                    -
                    <NumberFormat
                      className={"pl-2 priceStyle"}
                      value={5000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                  </div>
                  <div className="title">
                    <p> Red Sweater</p>
                  </div>
                  <div className="details">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </p>
                  </div>
                  <hr />
                  <div className="MOQ">
                    <span>MOQ</span>
                    <span>20sold</span>
                  </div>
                </div>
                <div className="card">
                  <div className="imageContainer">
                    <img src={Img2} alt="image" />
                  </div>
                  <div className="Amount">
                    <NumberFormat
                      className={"pr-2 priceStyle"}
                      value={200}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                    -
                    <NumberFormat
                      className={"pl-2 priceStyle"}
                      value={5000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                  </div>
                  <div className="title">
                    <p> Red Sweater</p>
                  </div>
                  <div className="details">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </p>
                  </div>
                  <hr />
                  <div className="MOQ">
                    <span>MOQ</span>
                    <span>20sold</span>
                  </div>
                </div>
                <div className="card">
                  <div className="imageContainer">
                    <img src={Img3} alt="image" />
                  </div>
                  <div className="Amount">
                    <NumberFormat
                      className={"pr-2 priceStyle"}
                      value={200}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                    -
                    <NumberFormat
                      className={"pl-2 priceStyle"}
                      value={5000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                  </div>
                  <div className="title">
                    <p> Red Sweater</p>
                  </div>
                  <div className="details">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </p>
                  </div>
                  <hr />
                  <div className="MOQ">
                    <span>MOQ</span>
                    <span>20sold</span>
                  </div>
                </div>
                <div className="card">
                  <div className="imageContainer">
                    <img src={Img4} alt="image" />
                  </div>
                  <div className="Amount">
                    <NumberFormat
                      className={"pr-2 priceStyle"}
                      value={200}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                    -
                    <NumberFormat
                      className={"pl-2 priceStyle"}
                      value={5000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                  </div>
                  <div className="title">
                    <p> Red Sweater</p>
                  </div>
                  <div className="details">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </p>
                  </div>
                  <hr />
                  <div className="MOQ">
                    <span>MOQ</span>
                    <span>20sold</span>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="card">
                  <div className="imageContainer">
                    <img src={Img5} alt="image" />
                  </div>
                  <div className="Amount">
                    <NumberFormat
                      className={"pr-2 priceStyle"}
                      value={200}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                    -
                    <NumberFormat
                      className={"pl-2 priceStyle"}
                      value={5000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                  </div>
                  <div className="title">
                    <p> Red Sweater</p>
                  </div>
                  <div className="details">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </p>
                  </div>
                  <hr />
                  <div className="MOQ">
                    <span>MOQ</span>
                    <span>20sold</span>
                  </div>
                </div>
                <div className="card">
                  <div className="imageContainer">
                    <img src={Img6} alt="image" />
                  </div>
                  <div className="Amount">
                    <NumberFormat
                      className={"pr-2 priceStyle"}
                      value={200}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                    -
                    <NumberFormat
                      className={"pl-2 priceStyle"}
                      value={5000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                  </div>
                  <div className="title">
                    <p> Red Sweater</p>
                  </div>
                  <div className="details">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </p>
                  </div>
                  <hr />
                  <div className="MOQ">
                    <span>MOQ</span>
                    <span>20sold</span>
                  </div>
                </div>
                <div className="card">
                  <div className="imageContainer">
                    <img src={Img7} alt="image" />
                  </div>
                  <div className="Amount">
                    <NumberFormat
                      className={"pr-2 priceStyle"}
                      value={200}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                    -
                    <NumberFormat
                      className={"pl-2 priceStyle"}
                      value={5000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                  </div>
                  <div className="title">
                    <p> Red Sweater</p>
                  </div>
                  <div className="details">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </p>
                  </div>
                  <hr />
                  <div className="MOQ">
                    <span>MOQ</span>
                    <span>20sold</span>
                  </div>
                </div>
                <div className="card">
                  <div className="imageContainer">
                    <img src={Img8} alt="image" />
                  </div>
                  <div className="Amount">
                    <NumberFormat
                      className={"pr-2 priceStyle"}
                      value={200}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                    -
                    <NumberFormat
                      className={"pl-2 priceStyle"}
                      value={5000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                  </div>
                  <div className="title">
                    <p> Red Sweater</p>
                  </div>
                  <div className="details">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </p>
                  </div>
                  <hr />
                  <div className="MOQ">
                    <span>MOQ</span>
                    <span>20sold</span>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="card">
                  <div className="imageContainer">
                    <img src={Img9} alt="image" />
                  </div>
                  <div className="Amount">
                    <NumberFormat
                      className={"pr-2 priceStyle"}
                      value={200}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                    -
                    <NumberFormat
                      className={"pl-2 priceStyle"}
                      value={5000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                  </div>
                  <div className="title">
                    <p> Red Sweater</p>
                  </div>
                  <div className="details">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </p>
                  </div>
                  <hr />
                  <div className="MOQ">
                    <span>MOQ</span>
                    <span>20sold</span>
                  </div>
                </div>
                <div className="card">
                  <div className="imageContainer">
                    <img src={Img10} alt="image" />
                  </div>
                  <div className="Amount">
                    <NumberFormat
                      className={"pr-2 priceStyle"}
                      value={200}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                    -
                    <NumberFormat
                      className={"pl-2 priceStyle"}
                      value={5000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                  </div>
                  <div className="title">
                    <p> Red Sweater</p>
                  </div>
                  <div className="details">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </p>
                  </div>
                  <hr />
                  <div className="MOQ">
                    <span>MOQ</span>
                    <span>20sold</span>
                  </div>
                </div>
                <div className="card">
                  <div className="imageContainer">
                    <img src={Img5} alt="image" />
                  </div>
                  <div className="Amount">
                    <NumberFormat
                      className={"pr-2 priceStyle"}
                      value={200}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                    -
                    <NumberFormat
                      className={"pl-2 priceStyle"}
                      value={5000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                  </div>
                  <div className="title">
                    <p> Red Sweater</p>
                  </div>
                  <div className="details">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </p>
                  </div>
                  <hr />
                  <div className="MOQ">
                    <span>MOQ</span>
                    <span>20sold</span>
                  </div>
                </div>
                <div className="card">
                  <div className="imageContainer">
                    <img src={Img1} alt="image" />
                  </div>
                  <div className="Amount">
                    <NumberFormat
                      className={"pr-2 priceStyle"}
                      value={200}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                    -
                    <NumberFormat
                      className={"pl-2 priceStyle"}
                      value={5000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                  </div>
                  <div className="title">
                    <p> Red Sweater</p>
                  </div>
                  <div className="details">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </p>
                  </div>
                  <hr />
                  <div className="MOQ">
                    <span>MOQ</span>
                    <span>20sold</span>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="card">
                  <div className="imageContainer">
                    <img src={Img8} alt="image" />
                  </div>
                  <div className="Amount">
                    <NumberFormat
                      className={"pr-2 priceStyle"}
                      value={200}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                    -
                    <NumberFormat
                      className={"pl-2 priceStyle"}
                      value={5000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                  </div>
                  <div className="title">
                    <p> Red Sweater</p>
                  </div>
                  <div className="details">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </p>
                  </div>
                  <hr />
                  <div className="MOQ">
                    <span>MOQ</span>
                    <span>20sold</span>
                  </div>
                </div>
                <div className="card">
                  <div className="imageContainer">
                    <img src={Img4} alt="image" />
                  </div>
                  <div className="Amount">
                    <NumberFormat
                      className={"pr-2 priceStyle"}
                      value={200}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                    -
                    <NumberFormat
                      className={"pl-2 priceStyle"}
                      value={5000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                  </div>
                  <div className="title">
                    <p> Red Sweater</p>
                  </div>
                  <div className="details">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </p>
                  </div>
                  <hr />
                  <div className="MOQ">
                    <span>MOQ</span>
                    <span>20sold</span>
                  </div>
                </div>
                <div className="card">
                  <div className="imageContainer">
                    <img src={Img6} alt="image" />
                  </div>
                  <div className="Amount">
                    <NumberFormat
                      className={"pr-2 priceStyle"}
                      value={200}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                    -
                    <NumberFormat
                      className={"pl-2 priceStyle"}
                      value={5000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                  </div>
                  <div className="title">
                    <p> Red Sweater</p>
                  </div>
                  <div className="details">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </p>
                  </div>
                  <hr />
                  <div className="MOQ">
                    <span>MOQ</span>
                    <span>20sold</span>
                  </div>
                </div>
                <div className="card">
                  <div className="imageContainer">
                    <img src={Img10} alt="image" />
                  </div>
                  <div className="Amount">
                    <NumberFormat
                      className={"pr-2 priceStyle"}
                      value={200}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                    -
                    <NumberFormat
                      className={"pl-2 priceStyle"}
                      value={5000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                  </div>
                  <div className="title">
                    <p> Red Sweater</p>
                  </div>
                  <div className="details">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </p>
                  </div>
                  <hr />
                  <div className="MOQ">
                    <span>MOQ</span>
                    <span>20sold</span>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="card">
                  <div className="imageContainer">
                    <img src={Img6} alt="image" />
                  </div>
                  <div className="Amount">
                    <NumberFormat
                      className={"pr-2 priceStyle"}
                      value={200}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                    -
                    <NumberFormat
                      className={"pl-2 priceStyle"}
                      value={5000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                  </div>
                  <div className="title">
                    <p> Red Sweater</p>
                  </div>
                  <div className="details">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </p>
                  </div>
                  <hr />
                  <div className="MOQ">
                    <span>MOQ</span>
                    <span>20sold</span>
                  </div>
                </div>
                <div className="card">
                  <div className="imageContainer">
                    <img src={Img2} alt="image" />
                  </div>
                  <div className="Amount">
                    <NumberFormat
                      className={"pr-2 priceStyle"}
                      value={200}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                    -
                    <NumberFormat
                      className={"pl-2 priceStyle"}
                      value={5000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                  </div>
                  <div className="title">
                    <p> Red Sweater</p>
                  </div>
                  <div className="details">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </p>
                  </div>
                  <hr />
                  <div className="MOQ">
                    <span>MOQ</span>
                    <span>20sold</span>
                  </div>
                </div>
                <div className="card">
                  <div className="imageContainer">
                    <img src={Img3} alt="image" />
                  </div>
                  <div className="Amount">
                    <NumberFormat
                      className={"pr-2 priceStyle"}
                      value={200}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                    -
                    <NumberFormat
                      className={"pl-2 priceStyle"}
                      value={5000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                  </div>
                  <div className="title">
                    <p> Red Sweater</p>
                  </div>
                  <div className="details">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </p>
                  </div>
                  <hr />
                  <div className="MOQ">
                    <span>MOQ</span>
                    <span>20sold</span>
                  </div>
                </div>
                <div className="card">
                  <div className="imageContainer">
                    <img src={Img1} alt="image" />
                  </div>
                  <div className="Amount">
                    <NumberFormat
                      className={"pr-2 priceStyle"}
                      value={200}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                    -
                    <NumberFormat
                      className={"pl-2 priceStyle"}
                      value={5000}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                  </div>
                  <div className="title">
                    <p> Red Sweater</p>
                  </div>
                  <div className="details">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </p>
                  </div>
                  <hr />
                  <div className="MOQ">
                    <span>MOQ</span>
                    <span>20sold</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Header />
        <Footer />
      </TopSellingContainer>
    );
  }
}

const TopSellingContainer = styled.div`
  margin-top: 100px;
  font-family: "Muli", sans-serif;
  .banner {
    background-color: var(--colorAsh);
    width: 90%;
    margin: auto;
    height: 100px;
  }
  .card {
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: auto;
    margin-bottom: 3%;

    .imageContainer {
      width: 200px;
      overflow: hidden;
      height: 200px;
    }
    .imageContainer img {
      width: 200px;
      height: 150px;
    }
    .Amount {
      font-size: 20px;
      text-align: center;
      font-weight: bold;
      font-family: "Muli", sans-serif;
    }
    .title {
      color: var(--colorAsh);
      font-size: 16px;
      text-align: center;
      font-weight: bold;
    }
    .details {
      color: var(--colorAsh);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    hr{
      width: 100%;
    }
    .MOQ {
      span{
        margin: 10px 30px;
      }
    }
  }
  .sidebar__item {
    margin-bottom: 35px;
  }

  .sidebar__item.sidebar__item__color--option {
    overflow: hidden;
  }

  .sidebar__item h4 {
    color: #1c1c1c;
    font-weight: 700;
    margin-bottom: 25px;
  }

  .sidebar__item ul li {
    list-style: none;
  }

  .sidebar__item ul li a {
    font-size: 16px;
    color: #1c1c1c;
    line-height: 39px;
    display: block;
  }

  .sidebar__item .latest-product__text {
    position: relative;
  }

  .sidebar__item .latest-product__text h4 {
    margin-bottom: 45px;
  }

  .sidebar__item .latest-product__text .owl-carousel .owl-nav {
    right: 0;
  }

  .price-range-wrap .range-slider {
    margin-top: 20px;
  }

  .price-range-wrap .range-slider .price-input {
    position: relative;
  }

  .price-range-wrap .range-slider .price-input:after {
    position: absolute;
    left: 38px;
    top: 13px;
    height: 1px;
    width: 5px;
    background: #dd2222;
    content: "";
  }

  .price-range-wrap .range-slider .price-input input {
    font-size: 16px;
    color: #dd2222;
    font-weight: 700;
    max-width: 20%;
    border: none;
    display: inline-block;
  }

  .price-range-wrap .price-range {
    border-radius: 0;
  }

  .price-range-wrap .price-range.ui-widget-content {
    border: none;
    background: #ebebeb;
    height: 5px;
  }

  .price-range-wrap .price-range.ui-widget-content .ui-slider-handle {
    height: 13px;
    width: 13px;
    border-radius: 50%;
    background: #ffffff;
    border: none;
    -webkit-box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
    outline: none;
    cursor: pointer;
  }

  .price-range-wrap .price-range .ui-slider-range {
    background: #dd2222;
    border-radius: 0;
  }

  .price-range-wrap
    .price-range
    .ui-slider-range.ui-corner-all.ui-widget-header:last-child {
    background: #dd2222;
  }

  .sidebar__item__color {
    float: left;
    width: 40%;
  }

  .sidebar__item__color.sidebar__item__color--white label:after {
    border: 2px solid #333333;
    background: transparent;
  }

  .sidebar__item__color.sidebar__item__color--gray label:after {
    background: #e9a625;
  }

  .sidebar__item__color.sidebar__item__color--red label:after {
    background: #d62d2d;
  }

  .sidebar__item__color.sidebar__item__color--black label:after {
    background: #252525;
  }

  .sidebar__item__color.sidebar__item__color--blue label:after {
    background: #249bc8;
  }

  .sidebar__item__color.sidebar__item__color--green label:after {
    background: #3cc032;
  }

  .sidebar__item__color label {
    font-size: 16px;
    color: #333333;
    position: relative;
    padding-left: 32px;
    cursor: pointer;
  }

  .sidebar__item__color label input {
    position: absolute;
    visibility: hidden;
  }

  .sidebar__item__color label:after {
    position: absolute;
    left: 0;
    top: 5px;
    height: 14px;
    width: 14px;
    background: #222;
    content: "";
    border-radius: 50%;
  }

  .sidebar__item__size {
    display: inline-block;
    margin-right: 16px;
    margin-bottom: 10px;
  }

  .sidebar__item__size label {
    font-size: 12px;
    color: #6f6f6f;
    display: inline-block;
    padding: 8px 25px 6px;
    background: #f5f5f5;
    cursor: pointer;
    margin-bottom: 0;
  }

  .sidebar__item__size label input {
    position: absolute;
    visibility: hidden;
  }
`;

export default TopSelling;
