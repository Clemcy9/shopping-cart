import React, { useContext } from "react";
import styled from "styled-components";
import "./hero.css";
import { device } from "../components/mediaBreakPoints";

import Kumbh from "../resources/font/static/KumbhSans-Medium.ttf";
import Carousel from "../components/carousel";
import product1 from "../resources/images/image-product-1.jpg";
import product2 from "../resources/images/image-product-2.jpg";
import product3 from "../resources/images/image-product-3.jpg";
import product4 from "../resources/images/image-product-4.jpg";
import closeBtn from "../resources/images/icon-close.svg";

import { useState } from "react";
import { CartContext, ToggleContext } from "../components/useCartToggle";
import ModalView from "../components/modal";

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
    /* padding: 1em 2em; */
    & .child2 {
      padding: 0.5em 1em;
    }
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
    justify-content: center;
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
      /* background-color: blue; */
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
      /* background-color: red; */
    }
    & .child2 {
      width: 50%;
      /* background-color: red; */
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
      /* background-color: pink; */
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
      /* background-color: yellow; */
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

function Hero({ increaseCart, decreaseCart, cartItems, emptyCart }) {
  // toggle for cart context api
  const show = useContext(CartContext);
  const setShow = useContext(ToggleContext);

  // new import modal
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const images = [product1, product2, product3, product4];
  console.log(`image size: ${images.length}`);

  return (
    <Container>
      <div>
        {/* <button onClick={openModal}>Open Modal</button> */}
        <ModalView isOpen={modalIsOpen} setIsOpen={() => setIsOpen(false)}>
          {/* Carousel placement */}
          <Carousel size={images.length}>{images}</Carousel>
        </ModalView>
      </div>

      <Flex>
        <div className="child1">
          {/* <img src={product1} alt="" id="product-img" /> */}
          {/* carousel starts */}
          <Carousel size={images.length} functionToCall={setIsOpen}>
            {images}
          </Carousel>
          {/* carousel ends */}
        </div>
        <div className="child2">
          <p className="company-name">SNEAKER COMPANY</p>
          <h3 className="item-title">
            Fall Limited Edition <br />
            Sneakers
          </h3>
          <p className="item-description">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer
          </p>
          <div>
            <h5 className="mb-0 amount">
              $125.00
              <p className="badge mx-3 my-2 price">50%</p>
            </h5>
          </div>
          <p id="slash-price">$250.00</p>
          <div className="my-2 buttons">
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
