import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Modal from "react-modal";
import "./hero.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { device } from "../components/mediaBreakPoints";

import Kumbh from "../resources/font/static/KumbhSans-Medium.ttf";

import product1 from "../resources/images/image-product-1.jpg";
import product2 from "../resources/images/image-product-2.jpg";
import product3 from "../resources/images/image-product-3.jpg";
import product4 from "../resources/images/image-product-4.jpg";
import closeBtn from "../resources/images/icon-close.svg";

import { useEffect, useState } from "react";
import Cart from "../components/cart";

const Container = styled.div`
  width: 100vw;
  max-width: 1600px;
  margin: 0 auto;
  padding: auto;
  /* padding: 1em 2em; */
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
  @media ${device.mobileS} {
    padding: 1em 2em;
  }
`;

const Flex = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  column-gap: 3em;
  /* align-items: center; */
  padding: 0.4em;
  /* border: 2px blue solid; */

  & .child1,
  .child2 {
    width: 100%;
  }

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

  & .company-name {
    color: hsl(26, 100%, 55%);
    font-weight: bold;
    font-size: 1em;
  }

  & .item-description,
  .item-title {
    /* background-color: red; */
    margin-top: 0.2em;
  }

  & .price {
    color: hsl(26, 100%, 55%);
    background-color: hsl(25, 100%, 94%);
    font-size: 10px;
  }

  & #slash-price {
    margin: 0;
    text-decoration: line-through;
    font-size: 10px;
  }

  & .buttons {
    display: flex;
    flex-direction: column;
    row-gap: 0.5em;
    column-gap: 0.5em;
  }

  & .btn-group button {
    background-color: hsl(223, 64%, 98%);
    color: hsl(26, 100%, 55%);
    line-height: 1.2em;
    display: flex;
    align-items: center;
  }

  & #cart-btn button {
    background-color: hsl(26, 100%, 55%);
    color: hsl(0, 0%, 100%);
    border-radius: 0.4em;
    width: 100%;
  }
  & #cart-btn button:hover {
    box-shadow: 0px 2px 15px 0px hsl(26, 100%, 55%);
  }

  @media ${device.mobileL} {
    flex-direction: column;

    & .child1,
    .child2 {
      width: 100%;
      background-color: blue;
    }
    & .child2 {
      padding: 0 1.5em;
    }
  }

  @media (min-width: 525px) and (max-width: 768px) {
    flex-direction: row;
    column-gap: 1em;
    & .child1 {
      width: 50%;
      background-color: red;
    }
    & .child2 {
      width: 50%;
      background-color: red;
      padding-top: 1em;
    }

    & .item-description,
    .item-title {
      margin-top: 1em;
    }
    & .company-name {
      font-size: 1em;
    }

    & .buttons {
      flex-direction: row;
    }
    & #cart-btn,
    .btn-group {
      width: 50%;
    }
  }
  @media ${device.tablet} {
    flex-direction: row;

    & .child1,
    .child2 {
      width: 45%;
      background-color: pink;
    }

    & .child2 {
      padding-top: 1.8em;
    }

    & .item-title {
      font-size: 2.2em;
      font-weight: bolder;
    }
    & .item-description,
    p {
      font-size: 1.2em;
    }

    & .price {
      font-size: 15px;
    }

    & .amount:not(p) {
      font-size: 1.5em;
    }
    & #slash-price {
      font-size: 20px;
    }

    & .buttons {
      flex-direction: row;
      column-gap: 1em;
    }
    & #cart-btn,
    .btn-group {
      width: 50%;
    }
    & #cart-btn button {
      width: 12em;
    }
  }

  @media ${device.LaptopL} {
    flex-direction: row;

    & .child1,
    .child2 {
      width: 45%;
      background-color: yellow;
    }

    & .child2 {
      padding-top: 1.8em;
    }

    & .company-name {
      font-size: 1.5em;
    }

    & .item-title {
      font-size: 3.2em;
      font-weight: bolder;
    }
    & .item-description,
    p {
      font-size: 1.5em;
    }

    & .price {
      font-size: 0.7em;
    }
    & .amount:not(p) {
      font-size: 2em;
    }
    & #slash-price {
      font-size: 20px;
    }

    & .buttons {
      flex-direction: row;
      column-gap: 1.3em;
    }
    & #cart-btn,
    .btn-group {
      width: 50%;
    }
    & #cart-btn button,
    .btn-group {
      width: 17em;
    }
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

function Hero({ increaseCart, decreaseCart, cartItems, emptyCart }) {
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

  // toggle for cart
  const [show, setShow] = useState(false);

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
        <div className="child1">
          {/* <img src={product1} alt="" id="product-img" /> */}
          {/* carousel starts */}
          <Carousel
            thumbWidth={80}
            showStatus={false}
            showArrows={false}
            onClickItem={openModal}
          >
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
        <div className="child2">
          <Cart
            show={show}
            id="hero"
            cartItems={cartItems}
            emptyCart={emptyCart}
          ></Cart>
          <p className="company-name">SNEAKER COMPANY</p>
          <h3 className="item-title">
            Fall Limited Edition <br />
            Sneakers
          </h3>
          <p className="item-description">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a duraable rubber outer sole, they'll withstand everthing
            the weather can offer
          </p>
          <div>
            <h5 className="mb-0 amount">
              $125.00
              <p className="badge mx-3 my-2 price">50%</p>
            </h5>
          </div>
          <p id="slash-price">$250.00</p>
          <div className="my-4 buttons">
            <div className="btn-group" role="group">
              <button type="button" className="btn " onClick={decreaseCart}>
                -
              </button>
              <button type="button" className="btn">
                {cartItems}
              </button>
              <button type="button" className="btn " onClick={increaseCart}>
                +
              </button>
            </div>
            <div id="cart-btn">
              <button
                className="btn btn-warning"
                onClick={() => setShow(!show)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </Flex>
    </Container>
  );
}

export default Hero;
