import styled from "styled-components";
import logo from "../resources/images/logo.svg";
import cart from "../resources/images/icon-cart.svg";
import avatar from "../resources/images/image-avatar.png";
import menu from "../resources/images/icon-menu.svg";
import Kumbh from "../resources/font/static/KumbhSans-Medium.ttf";

import { device } from "../components/mediaBreakPoints";
import { useState } from "react";
import Cart from "../components/cart";

const Container = styled.div`
  & * {
    box-sizing: border-box;
  }

  margin: 0 auto;
  box-sizing: border-box;
  min-width: fit-content;
  max-width: 1660px;
  position: relative;
  @font-face {
    font-family: "Kumbh";
    src: url(${Kumbh});
  }
  & a {
    margin: 0;
    padding: 0;
    color: black;
    /* box-sizing: border-box; */
  }
  @media ${device.mobileL} {
    padding: 1em 1em;
  }
`;

const Flex = styled.div`
  & a {
    text-decoration: none;
    font-family: Kumbh;
    display: block;
    padding: 0.3em;
    padding-bottom: 0;
    /* transition: background-color ease-in-out 1000ms; */
    /* border-bottom: 1px red solid; */
  }

  & #toggleIcon {
    /* position: absolute; */
    margin-right: 1em;
  }
  & #logo a:not(:first-child):hover {
    /* background-color: rgb(211 106 10); */
    border-bottom: 2px red solid;
    padding: 0.3em;
    text-decoration: none;
    /* border-radius: 1em; */
    /* color: white; */
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4em;
  & #logo a:not(:first-child) {
    display: none;
  }

  & #logo > img {
    width: 100px;
    height: 20px;
  }

  @media (min-width: 680px) and (max-width: 768px) {
    column-gap: 0.5em;
    & #logo a:not(:first-child) {
      display: block;
    }
    & #toggleIcon {
      display: none;
    }

    & a {
      font-size: 1.1em;
    }
  }
  @media ${device.tablet} {
    /* justify-content: space-between; */
    column-gap: 0.5em;
    /* border: 2px blue solid; */
    box-sizing: border-box;

    & #logo a:not(:first-child) {
      display: block;
    }
    & #toggleIcon {
      display: none;
    }
    & #logo > img {
      width: 140px;
      height: 30px;
    }
    & a {
      font-size: 1.23em;
    }
    & #cart {
      position: relative;
      cursor: pointer;
      padding: 4px;
      width: fit-content;
      height: fit-content;
    }

    & #cart:hover {
      border: 1px solid hsl(26, 100%, 55%);
      border-radius: 50%;
    }

    & #cart span {
      position: absolute;
      top: -7px;
      right: -12px;
      background-color: hsl(26, 100%, 55%);
      color: white;
    }

    & #avatar:hover {
      border: 2px solid hsl(26, 100%, 55%);
      border-radius: 50%;
      cursor: pointer;
    }
  }
`;

function Nav({ cartItems, emptyCart }) {
  // toggle for cart
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Cart show={show} cartItems={cartItems} emptyCart={emptyCart}></Cart>
      <Flex>
        <Flex id="logo">
          <div id="toggleIcon">
            <img src={menu} alt="" />
          </div>

          <img src={logo} className="img-fluid" alt="" />

          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </Flex>
        <Flex>
          <div id="cart" onClick={() => setShow(!show)}>
            <img src={cart} alt="" />
            {cartItems ? (
              <span className="badge badge-pill badge-warning">
                {cartItems}
              </span>
            ) : (
              ""
            )}
          </div>

          <a href="#">
            <img src={avatar} style={{ width: "40px" }} alt="" id="avatar" />
          </a>
        </Flex>
      </Flex>
      <hr style={{ margin: "0 0.7em" }} />
    </Container>
  );
}

export default Nav;
