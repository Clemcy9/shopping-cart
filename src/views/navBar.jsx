import styled from "styled-components";
import logo from "../resources/images/logo.svg";
import cart from "../resources/images/icon-cart.svg";
import avatar from "../resources/images/image-avatar.png";
import Kumbh from "../resources/font/static/KumbhSans-Medium.ttf";

import { useState } from "react";
import Cart from "../components/cart";

const Container = styled.div`
  & * {
    box-sizing: border-box;
  }
  padding: 1em 2em;
  box-sizing: border-box;
  min-width: fit-content;
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
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 0.5em;
  align-items: center;
  padding: 0.4em;
  /* border: 2px blue solid; */
  box-sizing: border-box;
  position: relative;

  & #logo a:first-child {
    /* column-gap: 0; */
    /* background-color: red; */
    margin-right: 5vw;
    min-width: fit-content;
  }
  & a {
    text-decoration: none;
    font-family: Kumbh;
    display: block;
    padding: 0.3em;
    padding-bottom: 0;

    /* transition: background-color ease-in-out 1000ms; */
    /* border-bottom: 1px red solid; */
  }
  & #logo a:not(:first-child):hover {
    /* background-color: rgb(211 106 10); */
    border-bottom: 2px red solid;
    padding: 0.3em;
    text-decoration: none;
    /* border-radius: 1em; */
    /* color: white; */
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
`;

function Nav({ cartItems }) {
  // toggle for cart
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Cart show={show} cartItems={cartItems}></Cart>
      <Flex>
        <Flex id="logo">
          <a href="#">
            <img src={logo} alt="" />
          </a>

          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </Flex>
        <Flex>
          <div id="cart" onClick={() => setShow(!show)}>
            <img src={cart} alt="" />
            <span className="badge badge-pill badge-warning">{cartItems}</span>
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
