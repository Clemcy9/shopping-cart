import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import closeBtn from "../resources/images/icon-close.svg";

const ModalParent = styled.div`
  position: fixed;
  display: ${(props) => (props.show ? "block" : "none")};
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.7);
  overflow: scroll;
`;

const Content = styled.div`
  /* background-color: #fefefe; */
  margin: 15% auto;
  padding: 20px;
  /* border: 1px solid #888; */
  width: 80%;
  z-index: 1;
`;

const CloseBtn = styled.span`
  position: relative;
  margin-bottom: 0.5em;
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
  & img {
    filter: invert(1) sepia(0.3) saturate(0) hue-rotate(0deg) brightness(10);
  }

  & img:hover,
  img:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
    /* filter: invert(1) sepia(0.5) hue-rotate(200deg) brightness(1); */
    filter: invert(1) sepia(1) saturate(10) hue-rotate(0deg) brightness(1);
  }
`;

function ModalView({ children, isOpen, setIsOpen }) {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen && setIsOpen();
        // alert("hello from outside");
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [setIsOpen]);

  return (
    <ModalParent show={isOpen}>
      <Content ref={ref}>
        <CloseBtn>
          <img
            src={closeBtn}
            alt="close button"
            style={{ width: "30px" }}
            onClick={() => setIsOpen(false)}
          />
        </CloseBtn>
        <div>{children}</div>
      </Content>
    </ModalParent>
  );
}

export default ModalView;
