import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Modal from "react-modal";
import "./hero.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Kumbh from "../resources/font/static/KumbhSans-Medium.ttf";
import product1 from "../resources/images/image-product-1.jpg";
import product2 from "../resources/images/image-product-2.jpg";
import product3 from "../resources/images/image-product-3.jpg";
import product4 from "../resources/images/image-product-4.jpg";
import closeBtn from "../resources/images/icon-close.svg";

import { useEffect, useState } from "react";

const Container = styled.div`
  width: 100vw;
  padding: auto;
  padding: 1em 2em;
  box-sizing: border-box;
  @font-face {
    font-family: "Kumbh";
    src: url(${Kumbh});
  }
  * {
    font-family: Kumbh;
    box-sizing: border-box;
    /* font-size: 20px; */
  }
  & p {
    font-weight: 100;
    font-size: small;
    color: hsl(219, 9%, 45%);
  }
`;

const Flex = styled.div`
  margin: auto;
  display: flex;
  position: relative;
  justify-content: center;
  column-gap: 3em;
  /* align-items: center; */
  padding: 0.4em;
  /* border: 2px blue solid; */

  & #product-img {
    width: 100%;
    margin: 0;
    padding: 0;
    border-radius: 1em;
  }
  & a {
    text-decoration: none;
    font-family: Kumbh;
  }
  & h3 {
    font-size: 1.5em;
    font-weight: bolder;
  }
  & h5 {
    font-weight: bold;
    font-size: 1em;
  }

  & .item-description,
  .item-title {
    /* background-color: red; */
    margin-top: 1em;
  }

  & #slash-price {
    margin: 0;
    text-decoration: line-through;
    font-size: 10px;
  }
  & .btn-group button {
    background-color: hsl(223, 64%, 98%);
    color: hsl(26, 100%, 55%);
    line-height: 1.2em;
    display: flex;
    align-items: center;
  }

  & #cart-btn button {
    margin-left: 1em;
    width: 12em;
    background-color: hsl(26, 100%, 55%);
    color: hsl(0, 0%, 100%);
    border-radius: 0.4em;
  }
  & #cart-btn button:hover {
    box-shadow: 0px 2px 15px 0px hsl(26, 100%, 55%);
  }
`;

// modal config and styling
const Modal1 = styled.div`
  display: flex: block;;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  /* position: relative; */
  & #box {
    width: 30%;
  }
  & #closeBtn {
    position: relative;
    top: 0;
    right: 0;
    /* border: 2px red solid; */
  }

  & #closeBtn img {
    position: absolute;
    top: -0.5em;
    right: 0;
    /* border: 2px red solid; */
  }

  & #closeBtn img:hover {
    cursor: pointer;
    padding-right: 1px;

    padding-bottom: 2px;
  }
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "33%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    padding: "0",
    height: "auto",
  },
};

function Hero() {
  // new import modal

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Container>
      <div>
        {/* <button onClick={openModal}>Open Modal</button> */}
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img
            src={closeBtn}
            onClick={closeModal}
            alt=""
            style={{
              position: "absolute",
              right: "0",
              top: "0",
            }}
          />
          <Carousel thumbWidth={80} showStatus={false}>
            <div>
              <img src={product1} />
              {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
              <img src={product2} />
              {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
              <img src={product3} />
              {/* <p className="legend">Legend 3</p> */}
            </div>
            <div>
              <img src={product4} />
              {/* <p className="legend">Legend 4</p> */}
            </div>
          </Carousel>
        </Modal>
      </div>

      <Flex>
        <div style={{ width: "40%" }} className="child1">
          {/* <img src={product1} alt="" id="product-img" /> */}
          {/* carousel starts */}
          <Carousel thumbWidth={80} showStatus={false} onClickItem={openModal}>
            <div>
              <img src={product1} />
              {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
              <img src={product2} />
              {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
              <img src={product3} />
              {/* <p className="legend">Legend 3</p> */}
            </div>
            <div>
              <img src={product4} />
              {/* <p className="legend">Legend 4</p> */}
            </div>
          </Carousel>
          {/* carousel ends */}
        </div>
        <div style={{ width: "50%" }} className="child2">
          <p
            className="mt-5"
            style={{ color: "hsl(26, 100%, 55%)", fontWeight: "bold" }}
          >
            SNEAKER COMPANY
          </p>
          <h3 className="item-title">
            Fall Limited Edition <br />
            Sneakers
          </h3>
          <p className="item-description">
            These low-profile sneakers are your perfect casual wear <br />
            companion. Featuring a duraable rubber outer sole, they'll <br />
            withstand everthing the weather can offer
          </p>
          <div>
            <h5 className="mb-0">
              $125.00
              <p
                style={{
                  color: "hsl(26, 100%, 55%)",
                  backgroundColor: "hsl(25, 100%, 94%)",
                  fontSize: "10px",
                }}
                class="badge badge-warning mx-3 my-2"
              >
                50%
              </p>
            </h5>
          </div>
          <p id="slash-price">$250.00</p>
          <div className="d-flex my-4">
            <div className="btn-group" role="group">
              <button type="button" class="btn ">
                -
              </button>
              <button type="button" class="btn">
                0
              </button>
              <button type="button" class="btn ">
                +
              </button>
            </div>
            <div id="cart-btn">
              <button className="btn btn-warning btn-l">Add to cart</button>
            </div>
          </div>
        </div>
      </Flex>
    </Container>
  );
}

export default Hero;
