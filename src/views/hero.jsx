import styled from "styled-components";

import Kumbh from "../resources/font/static/KumbhSans-Medium.ttf";
import product from "../resources/images/image-product-1.jpg";

const Container = styled.div`
  width: 100vw;
  padding: auto;
  padding: 1em 2em;
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
`;

const Flex = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  column-gap: 3em;
  /* align-items: center; */
  padding: 0.4em;
  border: 2px blue solid;

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

  & .item-description,
  .item-title {
    /* background-color: red; */
    margin-top: 1em;
  }

  & #slash-price {
    margin: 0;
    text-decoration: line-through;
    font-size: 10px;
  }
  & .btn-group button {
    background-color: hsl(223, 64%, 98%);
    color: hsl(26, 100%, 55%);
    line-height: 1.2em;
    display: flex;
    align-items: center;
  }

  & #cart-btn button {
    margin-left: 1em;
    width: 12em;
    background-color: hsl(26, 100%, 55%);
    color: hsl(0, 0%, 100%);
    border-radius: 0.4em;
  }
  & #cart-btn button:hover {
    box-shadow: 0px 2px 15px 0px hsl(26, 100%, 55%);
  }
`;

const Carousel = styled.div`
  & .carousel-inner img {
    width: 100%;
    height: 100%;
  }

  & #custCarousel .carousel-indicators {
    position: static;
    margin-top: 20px;
  }

  & #custCarousel .carousel-indicators > li {
    width: 100px;
  }

  & #custCarousel .carousel-indicators li img {
    display: block;
    opacity: 0.5;
  }

  & #custCarousel .carousel-indicators li.active img {
    opacity: 1;
  }

  & #custCarousel .carousel-indicators li:hover img {
    opacity: 0.75;
  }

  & .carousel-item img {
    width: 80%;
  }
`;

function Hero() {
  return (
    <Container>
      <Flex>
        <div style={{ width: "30%" }} className="child1">
          <img src={product} alt="" id="product-img" />
          {/* carousel starts */}
          <Carousel>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div
                    id="custCarousel"
                    className="carousel slide"
                    data-ride="carousel"
                    align="center"
                  >
                    {/* slides  */}
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src="https://i.imgur.com/weXVL8M.jpg"
                          alt="Hills"
                        />
                      </div>

                      <div className="carousel-item">
                        <img
                          src="https://i.imgur.com/Rpxx6wU.jpg"
                          alt="Hills"
                        />
                      </div>

                      <div className="carousel-item">
                        <img
                          src="https://i.imgur.com/83fandJ.jpg"
                          alt="Hills"
                        />
                      </div>

                      <div className="carousel-item">
                        <img
                          src="https://i.imgur.com/JiQ9Ppv.jpg"
                          alt="Hills"
                        />
                      </div>
                    </div>

                    {/* Left right */}
                    <a
                      className="carousel-control-prev"
                      href="#custCarousel"
                      data-slide="prev"
                    >
                      <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#custCarousel"
                      data-slide="next"
                    >
                      <span className="carousel-control-next-icon"></span>
                    </a>

                    {/* Thumbnails */}
                    <ol className="carousel-indicators list-inline">
                      <li className="list-inline-item active">
                        <a
                          id="carousel-selector-0"
                          className="selected"
                          data-slide-to="0"
                          data-target="#custCarousel"
                        >
                          <img
                            src="https://i.imgur.com/weXVL8M.jpg"
                            className="img-fluid"
                          />
                        </a>
                      </li>

                      <li className="list-inline-item">
                        <a
                          id="carousel-selector-1"
                          data-slide-to="1"
                          data-target="#custCarousel"
                        >
                          <img
                            src="https://i.imgur.com/Rpxx6wU.jpg"
                            className="img-fluid"
                          />
                        </a>
                      </li>

                      <li className="list-inline-item">
                        <a
                          id="carousel-selector-2"
                          data-slide-to="2"
                          data-target="#custCarousel"
                        >
                          <img
                            src="https://i.imgur.com/83fandJ.jpg"
                            className="img-fluid"
                          />
                        </a>
                      </li>

                      <li className="list-inline-item">
                        <a
                          id="carousel-selector-2"
                          data-slide-to="3"
                          data-target="#custCarousel"
                        >
                          <img
                            src="https://i.imgur.com/JiQ9Ppv.jpg"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
          {/* carousel ends */}
        </div>
        <div style={{ width: "50%" }} className="child2">
          <h3 className="item-title">
            Fall Limited Edition <br />
            Sneakers
          </h3>
          <p className="item-description">
            These low-profile sneakers are your perfect casual wear <br />
            companion. Featuring a duraable rubber outer sole, they'll <br />
            withstand everthing the weather can offer
          </p>
          <div>
            <h5 className="mb-0">
              $125.00
              <p
                style={{
                  color: "hsl(26, 100%, 55%)",
                  backgroundColor: "hsl(25, 100%, 94%)",
                  fontSize: "10px",
                }}
                class="badge badge-warning mx-3 my-2"
              >
                50%
              </p>
            </h5>
          </div>
          <p id="slash-price">$250.00</p>
          <div className="d-flex my-4">
            <div className="btn-group" role="group">
              <button type="button" class="btn ">
                -
              </button>
              <button type="button" class="btn">
                0
              </button>
              <button type="button" class="btn ">
                +
              </button>
            </div>
            <div id="cart-btn">
              <button className="btn btn-warning btn-l">Add to cart</button>
            </div>
          </div>
        </div>
      </Flex>
    </Container>
  );
}

export default Hero;
