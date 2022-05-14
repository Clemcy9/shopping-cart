import styled from "styled-components";
import React from "react";

import Kumbh from "../resources/font/static/KumbhSans-Medium.ttf";

import product1 from "../resources/images/image-product-1.jpg";
import bin from "../resources/images/icon-delete.svg";

function Cart({ show, id }) {
  const Container = styled.div`
    @font-face {
      font-family: "Kumbh";
      src: url(${Kumbh});
    }
    * {
      font-family: Kumbh;
    }
    display: ${(props) => (props.show ? "flex" : "none")};
    box-sizing: border-box;
    position: absolute;
    /* display: flex; */
    flex-direction: column;
    /* width: 15vw; */
    min-width: fit-content;
    padding: 1em;
    top: ${(props) => (props.id === "hero" ? "-1em" : "6em")};
    right: 3em;
    background-color: white;
    box-shadow: 0px 15px 34px 8px rgba(0, 0, 0, 0.36);
    -webkit-box-shadow: 0px 15px 34px 8px rgba(0, 0, 0, 0.36);
    -moz-box-shadow: 0px 15px 34px 8px rgba(0, 0, 0, 0.36);
    z-index: 1;
    border-radius: 0.3em;
    & button:hover {
      color: white;
      box-shadow: 0px 2px 15px 0px hsl(26, 100%, 55%);
    }

    & p {
      margin: 0;
    }

    & h6 {
      margin: 0;
      padding: 0;
      font-weight: bold;
    }

    & hr {
      margin: 0.8em 0;
    }
  `;
  const CartBtn = styled.button`
    width: 12em;
    min-width: 100%;
    background-color: hsl(26, 100%, 55%);
    color: hsl(0, 0%, 100%);
    border-radius: 0.4em;
  `;

  const Content = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 10px;
    align-items: center;

    & img {
      width: 2.5em;
      padding-bottom: 10px;
    }

    & #bin {
      width: 1.5em;
    }

    & #bin:hover {
      cursor: pointer;
      padding-top: 4px;
    }
  `;

  return (
    <Container show={show} id={id}>
      <h6>Cart</h6>
      <hr />
      <Content>
        <img src={product1} alt="" />
        <p>
          Fall Limited Edition Sneakers <br />
          $125.00{" "}
        </p>
        <img src={bin} alt="" id="bin" />
      </Content>
      <div>
        <CartBtn className="btn">Checkout</CartBtn>
      </div>
    </Container>
  );
}

export default Cart;
