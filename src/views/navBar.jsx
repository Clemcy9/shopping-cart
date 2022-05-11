import styled from "styled-components";
import logo from "../resources/images/logo.svg";
import cart from "../resources/images/icon-cart.svg";
import avatar from "../resources/images/image-avatar.png";
import Kumbh from "../resources/font/static/KumbhSans-Medium.ttf";

const Container = styled.div`
  & * {
    box-sizing: border-box;
  }
  padding: 1em 2em;
  box-sizing: border-box;
  min-width: fit-content;
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
`;

function Nav() {
  return (
    <Container>
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
