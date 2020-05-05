// import React from "react";
// import CatImg1 from "../Image/CateItem1.png";
// import CatImg2 from "../Image/CateItem2.png";
// import CatImg3 from "../Image/CateItem3.png";
// import CatImg4 from "../Image/CateItem4.png";
// import CatImg5 from "../Image/CateItem5.png";
// import CatImg6 from "../Image/CateItem6.png";
// import Row from "react-bootstrap/Row";
// import Image from "react-bootstrap/Image";
// import { Link } from "react-router-dom";

// function AdsCard(props) {
//   return (
//     <div className="AdsStyle">
//       <Image src={props.src} rounded />
//       <p id="details">{props.details}</p>
//       <p id="price">
//         {props.from} - {props.to}
//       </p>
//       <p id="discount">{props.discount} off</p>
//     </div>
//   );
// }
// function AdsCategory2() {
//   const style = {
//     margin: "20px 0px",
//   };
//   return (
//     <div className="Adscategory2" style={style}>
//       <p> Category</p>
//       <hr />
//       <div className="adsLink">
//         <Link to="/">View All</Link>
//       </div>
//       <Row>
//         <AdsCard
//           src={CatImg1}
//           details="Basket Tomato from Jankara"
//           from="500"
//           to="2500"
//           discount="-5%"
//         />
//         <AdsCard
//           src={CatImg3}
//           details="Basket Tomato from Jankara"
//           from="5000"
//           to="25000"
//           discount="-25%"
//         />
//         <AdsCard
//           src={CatImg2}
//           details="Basket Tomato from Jankara"
//           from="1250"
//           to="2500"
//           discount="-10%"
//         />
//         <AdsCard
//           src={CatImg4}
//           details="Basket Tomato from Jankara"
//           from="780"
//           to="2890"
//           discount="-50%"
//         />
//         <AdsCard
//           src={CatImg5}
//           details="Basket Tomato from Jankara"
//           from="380"
//           to="3000"
//           discount="-25%"
//         />
//         <AdsCard
//           src={CatImg6}
//           details="Basket Tomato from Jankara"
//           from="1500"
//           to="25000"
//           discount="-25%"
//         />
//       </Row>
//       <Row>
//         <AdsCard
//           src={CatImg5}
//           details="Basket Tomato from Jankara"
//           from="1500"
//           to="25000"
//           discount="-2%"
//         />
//         <AdsCard
//           src={CatImg4}
//           details="Basket Tomato from Jankara"
//           from="1500"
//           to="25000"
//           discount="-7%"
//         />
//         <AdsCard
//           src={CatImg2}
//           details="Basket Tomato from Jankara"
//           from="1500"
//           to="25000"
//           discount="-25%"
//         />
//         <AdsCard
//           src={CatImg1}
//           details="Basket Tomato from Jankara"
//           from="150"
//           to="2500"
//           discount="-25%"
//         />
//         <AdsCard
//           src={CatImg4}
//           details="Basket Tomato from Jankara"
//           from="1500"
//           to="25000"
//           discount="-25%"
//         />
//         <AdsCard
//           src={CatImg5}
//           details="Basket Tomato from Jankara"
//           from="100000"
//           to="258900"
//           discount="-25%"
//         />
//       </Row>
//     </div>
//   );
// }
// export default AdsCategory2;
