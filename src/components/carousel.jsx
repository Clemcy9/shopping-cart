import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import next from "../resources/images/icon-next.svg";
import prev from "../resources/images/icon-previous.svg";

// const Contents = styled.div`
//   width: 90vw;
//   height: auto;
// `;

const Container = styled.div`
  width: 500px;
  max-width: 100%;
  position: relative;
  margin: 0 auto;
  /* border: blue 4px solid; */
`;

const Slides = styled.div`
  display: ${(props) => (props.show === props.position ? "flex" : "none")};
  /* width: 400px; */
  /* width: fit-content; */
  /* border: blue solid 2px; */
  padding: 0 auto;
  place-content: center;

  & img {
    width: 100%;
  }
`;

const NavIcon = styled.img`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: 4em;
  margin-top: -22px;
  padding: 16px;
  filter: invert(1); //changes the color of img to white
  font-weight: bold;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  :hover {
    filter: invert(0) sepia(1) hue-rotate(90deg) saturate(50);
  }
`;
const Dots = styled.span`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  background-color: ${(props) =>
    props.where === props.current ? "#717171" : "#bbb"};
  border-radius: 50%;
  display: inline-block;
  position: relative;
  top: -10.4em;
  transition: background-color 0.6s ease;
  /* z-index: 1; */
  :hover,
  .active {
    background-color: #717171;
  }
`;

const Thumbnail = styled.div`
  display: flex;
  /* place-content: center; */
  justify-content: center;
`;

const Thumbs = styled.img`
  margin: 0.3em auto;
  width: calc((100%) / 1.1);
  height: auto;
  cursor: pointer;
  opacity: ${(props) => (props.where === props.current ? "0.5" : "1")};

  :hover {
    background-color: #717171;
    opacity: 0.5;
  }
`;

function Carousel({
  children,
  size,
  functionToCall,
  minWidth_for_function = 524,
}) {
  const [position, setPosition] = useState(1);

  // variable to check window width
  const width = window.innerWidth;

  const pixRef = useRef(null);
  useEffect(() => {
    const onpixClick = (event) => {
      // console.log(`click inside carousel`);
      // console.log(event.target);
      if (pixRef.current && pixRef.current.contains(event.target)) {
        console.log(`click inside carousel`);
        // toggleShow(false);
        if (width > minWidth_for_function) {
          // console.log("width is big");
          functionToCall(true);
        }
      }
    };
    document.addEventListener("click", onpixClick, true);
    return () => {
      document.removeEventListener("click", onpixClick, true);
    };
  }, []);

  const nextClick = () => {
    // console.log(`position is:${position}`);
    setPosition(position + 1);
    if (position === size - 1) {
      setPosition(0);
    }
  };
  const prevClick = () => {
    setPosition(position - 1);
    if (position < 1) {
      setPosition(3);
    }
  };

  return (
    <>
      <Container>
        <div ref={pixRef}>
          {children.map((image, index) => (
            <Slides show={index} position={position} key={index}>
              <img src={image} alt="product" />
            </Slides>
          ))}
        </div>

        <NavIcon src={prev} onClick={prevClick} />
        <NavIcon style={{ right: "0" }} src={next} onClick={nextClick} />

        <Thumbnail>
          {children.map((image, index) => (
            <div
              key={index}
              where={position}
              current={index}
              onClick={() => setPosition(index)}
            >
              <Thumbs
                src={image}
                where={position}
                current={index}
                alt="product"
              />
            </div>
          ))}
        </Thumbnail>
      </Container>
      <div style={{ textAlign: "center" }}>
        {children.map((image, index) => (
          <Dots
            key={index}
            where={position}
            current={index}
            onClick={() => setPosition(index)}
          />
        ))}
      </div>
    </>
  );
}
export default Carousel;
