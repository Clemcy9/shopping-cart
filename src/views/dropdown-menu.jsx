import styled from "styled-components";
import menu from "../resources/images/icon-menu.svg";
import close from "../resources/images/icon-close.svg";
import { useState } from "react";

const Container = styled.div`
  display: block;
  /* flex-direction: column; */
  position: absolute;
  z-index: 1;
  top: 1.5em;
  width: 40%;
  height: 100vh;
  & img {
    width: 20px;
  }
`;
const Content = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  /* justify-content: space-between; */

  background-color: white;
  column-gap: 1.5em;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 3.3em;
  left: 0;
  z-index: 1;
  /* top: 1.8em;
  width: 40%; */

  & a {
    color: black;
    background-color: white;
    display: block;
    margin: 5px 0;
    padding: 5px;
  }

  & a:hover {
    background-color: #ff7d1ac9;
    color: white;
  }
`;
const MenuIcon = styled.div`
  background-image: url(${(props) => (props.show ? close : menu)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 25px;
  height: 25px;
  cursor: pointer;
  /* background-color: red; */
`;

function DropMenu() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <Container show={isMenu}>
      <MenuIcon onClick={() => setIsMenu(!isMenu)} show={isMenu} />
      {/* <img src={menu} alt="menu-icon" onClick={() => setIsMenu(!isMenu)} /> */}
      <Content show={isMenu}>
        <a href="#collections">Collections</a>
        <a href="#men">Men</a>
        <a href="#women">Women</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </Content>
    </Container>
  );
}

export default DropMenu;
