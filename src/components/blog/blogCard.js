import React, { Component } from "react";
import styled from "styled-components";

function BlogPage(props) {
  return (
    <div>
      <Card>
        <div className="imageContainer">
          <img src={props.src} />
        </div>
        <div className="component">
        <span className="category">{props.categories}</span>
          <p className="title">{props.title}</p>
          <span className="postBy">{props.postBy}</span>
          <span className="date">{props.date}</span>
        </div>
      </Card>
    </div>
  );
}

const Card = styled.div`
  margin: auto; 
  width: 700px;
  display: flex;
  height: 150px;  
  padding: 15px;
  border-bottom: solid 0.5px var(--colorAsh);
  .imageContainer {
    width: 20%;
    height: 100px;
    border: solid 0.4px var(--colorAsh);
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .component{
    .category{
      color: var(--colorAsh);
    }
    .title{
      font-size: 20px;
      font-weight: bold;
    }
    .postBy{
      font-size:
    }
  }
`;
export default BlogPage;
