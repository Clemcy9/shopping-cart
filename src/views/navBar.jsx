import styled from "styled-components";
import logo from "../resources/images/logo.svg";
import cart from "../resources/images/icon-cart.svg";
import avatar from "../resources/images/image-avatar.png";
import menu from "../resources/images/icon-menu.svg";
import Kumbh from "../resources/font/static/KumbhSans-Medium.ttf";

import { device } from "../components/mediaBreakPoints";

const Container = styled.div`
  & * {
    box-sizing: border-box;
  }


  margin: 0 auto;
  box-sizing: border-box;
  min-width: fit-content;
  max-width: 1660px;
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
  @media ${device.mobileS} {
    padding: 1em 2em;
  }
 
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
    width: 70px;
    height: 20px;
  }

  @media (min-width: 660px) and (max-width: 768px) {
    column-gap: 0.5em;
    & #logo a:not(:first-child) {
      display: block;
    }
    & #toggleIcon {
      display: none;
    }

    & a {
      font-size: 1.12em;
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
    & a {
      font-size: 1.43em;
    }
  }
`;

function Nav() {
  return (
    <Container>
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
        <Flex id="cartUser">
          <a href="#">
            <img src={cart} alt="" />
          </a>
          <a href="#">
            <img src={avatar} style={{ width: "40px" }} alt="" />
          </a>
        </Flex>
      </Flex>
      <hr style={{ margin: "0 0.7em" }} />
    </Container>
  );
}

export default Nav;
