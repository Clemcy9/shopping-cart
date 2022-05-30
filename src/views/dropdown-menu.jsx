import styled from "styled-components";
import menu from "../resources/images/icon-menu.svg";
import close from "../resources/images/icon-close.svg";
import { useState, useRef, useEffect } from "react";

const Container = styled.div`
  display: block;
  /* border: red 2px solid; */
  position: fixed;
  top: 0;
  width: ${(props) => (props.show ? "100vw" : "fit-content")};
  height: ${(props) => (props.show ? "100vh" : "fit-content")};
  /* background-color: rgb(0, 0, 0); */
  background-color: ${(props) => (props.show ? "rgba(0, 0, 0, 0.7)" : "")};
  z-index: ${(props) => (props.show ? "1" : "0")};
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
  top: 0;
  width: 50%;
  left: 0;

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
  /* margin-top: 1.8em; */
  position: relative;
  margin-bottom: 2.5em;
  top: 1.6em;
  left: 0.4em;
  width: 25px;
  height: 25px;
  cursor: pointer;
  z-index: 1;
  /* background-color: red; */
`;

function DropMenu() {
  const [isMenu, setIsMenu] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [setIsMenu]);

  return (
    <Container show={isMenu}>
      <MenuIcon onClick={() => setIsMenu(!isMenu)} show={isMenu} />
      {/* <img src={menu} alt="menu-icon" onClick={() => setIsMenu(!isMenu)} /> */}
      <Content show={isMenu} ref={menuRef}>
        <MenuIcon onClick={() => setIsMenu(!isMenu)} show={isMenu} />
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
